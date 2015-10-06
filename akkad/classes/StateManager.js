import Immutable from "immutable";

const _state = Symbol("state");
const _actions = Symbol("actions");
const _wrappedActions = Symbol("wrappedActions");
const _stateSetCallback = Symbol("stateSetCallback")
const _hasBeenInitialized = Symbol("hasBeenInitialized")

class StateManager {
	init(actions, initFunc, stateSetCallback) {
		try {
			if(!this[_hasBeenInitialized]) {
				this[_hasBeenInitialized] = true;

				/* create wrapped actions */
				this[_wrappedActions] = Immutable.Map(actions).reduce((acc, func, name) => {
					acc[name] = (...args) => this.actionWrapper(func, ...args);
					return acc;
				}, {});

				this[_actions] = actions;

				/* Set initial state from init function */
				this[_state] = initFunc(this[_wrappedActions]);

				/* set state callback, most likely a setState React method */
				this[_stateSetCallback] = stateSetCallback;
			} else {
				throw new Error("StateManager has already been initialized");
			}
		} catch (e) {
			console.error(e);
		}
	}

	get actions() {
		return this[_wrappedActions];
	}

	get appState() {
		return this[_state];
	}

	actionWrapper(func, ...args) {
		// call the action function with correct args.
		const newState = func(this[_state], this[_wrappedActions], ...args);

		if (newState) {
			if(newState !== this[_state]) {
				this[_state] = newState;
			}
			// call the callback specified in the init method.
			this[_stateSetCallback](this[_state], this[_wrappedActions]);
		}

		return this[_state];
	}
}

export default StateManager;