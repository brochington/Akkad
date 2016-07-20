import Immutable from "immutable";

const _state = Symbol("state");
const _actions = Symbol("actions");
const _wrappedActions = Symbol("wrappedActions");
const _stateSetCallback = Symbol("stateSetCallback");
const _hasBeenInitialized = Symbol("hasBeenInitialized");

class StateManager {
    init(actions, initFunc, stateSetCallback) {
        // attach stateManager to window for debugging
        if (window) window.stateManager = this;

        try {
            if (!this[_hasBeenInitialized]) {
                this[_hasBeenInitialized] = true;

                /* wrap actions */
                const wrappedActions = Immutable.Map(actions).reduce(this.wrapActions, {});

                /* wrap internal actions */
                const wrappedInternalActions = Immutable.Map(actions._internal).reduce(::this.wrapActions, {});

                this[_wrappedActions] = {
                    ...wrappedActions,
                    _internal: wrappedInternalActions
                };

                this[_actions] = actions;

                /* Set initial state from init function */
                this[_state] = initFunc(this[_wrappedActions]);

                /* set state callback, most likely a setState React method */
                this[_stateSetCallback] = stateSetCallback;
            }

            else {
                throw new Error("StateManager has already been initialized");
            }
        }

        catch (e) {
            console.error(e);
        }
    }

    get actions() {
        return this[_wrappedActions];
    }

    get appState() {
        return this[_state];
    }

    /* wraps actions with... the actionWrapper */
    wrapActions = (acc, val, name) => {
        if (typeof val === "function") {
            acc[name] = (...args) => this.actionWrapper(name, val, ...args);
        }
        return acc;
    };

    /* injects state and actions as args into actions that are called. */
    actionWrapper(name, func, ...args) {
        // call the action function with correct args.
        const newState = func(() => this[_state], this[_wrappedActions], ...args);

        this.handleActionReturnTypes(newState);

        return this[_state];
    }

    /* handles standard values, promises (from async functions) and generator function return values */
    handleActionReturnTypes = (newState) => {
        // if (newState instanceof Promise) {
        if (typeof newState.then === "function") {
            newState.then(this.callSetStateCallback);
        }

        // Detect if newState is actually a generator function.
        else if (typeof newState.next === "function") {
            this.generatorHandler(newState);
        }

        // newState should be an immutable object.
        else {
            this.callSetStateCallback(newState);
        }
    };

    /* A recursive function to handle the output of generator functions. */
    generatorHandler = (genObject) => {
        const {value, done} = genObject.next();

        value && this.handleActionReturnTypes(value);

        if (!done) {
            this.generatorHandler(genObject);
        }
    };

    /* Checks to make sure object is an immutable map, then calls the setState callback */
    callSetStateCallback = (newState) => {
        if (Immutable.Map.isMap(newState)) {
            if (newState !== this[_state]) {
                this[_state] = newState;
            }
            // call the callback specified in the init method.
            this[_stateSetCallback](this[_state], this[_wrappedActions]);
        }

        else {
            console.error("recieved state that was not an immutable map. Did you remember to add a return value in your action?");
            console.log(newState);
        }
    };
}

export default StateManager;
