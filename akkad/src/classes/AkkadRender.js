// import Immutable from 'immutable';
// import React from 'react';
import instantiateReactComponent from 'react/lib/instantiateReactComponent';
import ReactUpdates from 'react/lib/ReactUpdates';
import ReactReconciler from 'react/lib/ReactReconciler';
import ReactDefaultInjection from 'react/lib/ReactDefaultInjection';
import ReactDOMEmptyComponent from 'react/lib/ReactDOMEmptyComponent';
import ReactMultiChild from 'react/lib/ReactMultiChild';

// function warning(stuff){
//     console.log('stuff', stuff);
// }

function ReactDOMContainerInfo(topLevelWrapper) {
    var info = {
        _topLevelWrapper: topLevelWrapper,
        _idCounter: 100000,
        _ownerDocument: null,
        _tag: null,
        _namespaceURI: null
    };

    return info;
}

/**
 * Perform an update to a mounted component. The componentWillReceiveProps and
 * shouldComponentUpdate methods are called, then (assuming the update isn't
 * skipped) the remaining update lifecycle methods are called and the DOM
 * representation is updated.
 *
 * By default, this implements React's rendering and reconciliation algorithm.
 * Sophisticated clients may wish to override this.
 *
 * @param {ReactReconcileTransaction} transaction
 * @param {ReactElement} prevParentElement
 * @param {ReactElement} nextParentElement
 * @internal
 * @overridable
 */
function updateComponent(transaction, prevParentElement, nextParentElement, prevUnmaskedContext, nextUnmaskedContext) {
    var inst = this._instance;
    var willReceive = false;
    var nextContext;
    var nextProps;

  // Determine if the context has changed or not
    if (this._context === nextUnmaskedContext) {
        nextContext = inst.context;
    } else {
        nextContext = this._processContext(nextUnmaskedContext);
        willReceive = true;
    }

    // Distinguish between a props update versus a simple state update
    if (prevParentElement === nextParentElement) {
    // Skip checking prop types again -- we don't read inst.props to avoid
    // warning for DOM component props in this upgrade
        nextProps = nextParentElement.props;
    } else {
        nextProps = this._processProps(nextParentElement.props);
        willReceive = true;
    }

    // An update here will schedule an update but immediately set
    // _pendingStateQueue which will ensure that any state updates gets
    // immediately reconciled instead of waiting for the next batch.
    if (willReceive && inst.componentWillReceiveProps) {
        inst.componentWillReceiveProps(nextProps, nextContext);
    }

    var nextState = _processPendingState.call(this, nextProps, nextContext);

    var shouldUpdate = this._pendingForceUpdate || !inst.shouldComponentUpdate || inst.shouldComponentUpdate(nextProps, nextState, nextContext);

    // if (process.env.NODE_ENV !== 'production') {
    //     process.env.NODE_ENV !== 'production' ? warning(shouldUpdate !== undefined, '%s.shouldComponentUpdate(): Returned undefined instead of a ' + 'boolean value. Make sure to return true or false.', this.getName() || 'ReactCompositeComponent') : void 0;
    // }

    if (shouldUpdate) {
        this._pendingForceUpdate = false;
        // Will set `this.props`, `this.state` and `this.context`.
        _performComponentUpdate.call(this, nextParentElement, nextProps, nextState, nextContext, transaction, nextUnmaskedContext);
    } else {
        // If it's determined that a component should not update, we still want
        // to set props and state but we shortcut the rest of the update.
        this._currentElement = nextParentElement;
        this._context = nextUnmaskedContext;
        inst.props = nextProps;
        inst.state = nextState;
        inst.context = nextContext;
    }
}

function _processPendingState(props, context) {
    var inst = this._instance;
    var queue = this._pendingStateQueue;
    var replace = this._pendingReplaceState;
    this._pendingReplaceState = false;
    this._pendingStateQueue = null;

    if (!queue) {
        return inst.state;
    }

    if (replace && queue.length === 1) {
        return queue[0];
    }

    var nextState = Object.assign({}, replace ? queue[0] : inst.state);
    for (var i = replace ? 1 : 0; i < queue.length; i++) {
        var partial = queue[i];
        Object.assign(nextState, typeof partial === 'function' ? partial.call(inst, nextState, props, context) : partial);
    }

    return nextState;
}

/**
 * Merges new props and state, notifies delegate methods of update and
 * performs update.
 *
 * @param {ReactElement} nextElement Next element
 * @param {object} nextProps Next public object to set as properties.
 * @param {?object} nextState Next object to set as state.
 * @param {?object} nextContext Next public object to set as context.
 * @param {ReactReconcileTransaction} transaction
 * @param {?object} unmaskedContext
 * @private
 */
function _performComponentUpdate(nextElement, nextProps, nextState, nextContext, transaction, unmaskedContext) {
    var inst = this._instance;

    var hasComponentDidUpdate = Boolean(inst.componentDidUpdate);
    var prevProps;
    var prevState;
    var prevContext;
    if (hasComponentDidUpdate) {
        prevProps = inst.props;
        prevState = inst.state;
        prevContext = inst.context;
    }

    if (inst.componentWillUpdate) {
        inst.componentWillUpdate(nextProps, nextState, nextContext);
    }

    this._currentElement = nextElement;
    this._context = unmaskedContext;
    inst.props = nextProps;
    inst.state = nextState;
    inst.context = nextContext;

    _updateRenderedComponent.call(this, transaction, unmaskedContext);

    if (hasComponentDidUpdate) {
        transaction.getReactMountReady().enqueue(inst.componentDidUpdate.bind(inst, prevProps, prevState, prevContext), inst);
    }
}

/**
 * Given a `prevElement` and `nextElement`, determines if the existing
 * instance should be updated as opposed to being destroyed or replaced by a new
 * instance. Both arguments are elements. This ensures that this logic can
 * operate on stateless trees without any backing instance.
 *
 * @param {?object} prevElement
 * @param {?object} nextElement
 * @return {boolean} True if the existing instance should be updated.
 * @protected
 */

function shouldUpdateReactComponent(prevElement, nextElement) {
    var prevEmpty = prevElement === null || prevElement === false;
    var nextEmpty = nextElement === null || nextElement === false;
    if (prevEmpty || nextEmpty) {
        return prevEmpty === nextEmpty;
    }

    var prevType = typeof prevElement;
    var nextType = typeof nextElement;
    if (prevType === 'string' || prevType === 'number') {
        return nextType === 'string' || nextType === 'number';
    } else {
        return nextType === 'object' && prevElement.type === nextElement.type && prevElement.key === nextElement.key;
    }
}

/**
 * Call the component's `render` method and update the DOM accordingly.
 *
 * @param {ReactReconcileTransaction} transaction
 * @internal
 */
function _updateRenderedComponent(transaction, context) {
    // console.log('_updateRenderedComponent 123');
    var prevComponentInstance = this._renderedComponent;
    var prevRenderedElement = prevComponentInstance._currentElement;
    var nextRenderedElement = this._renderValidatedComponent();
    if (shouldUpdateReactComponent(prevRenderedElement, nextRenderedElement)) {

        console.log('if!!!', this);
        ReactReconciler.receiveComponent(prevComponentInstance, nextRenderedElement, transaction, this._processChildContext(context));
        // console.log(prevComponentInstance, nextRenderedElement, transaction, this._processChildContext(context));
    } else {
        console.log('else!!!!');
        // var oldNativeNode = ReactReconciler.getNativeNode(prevComponentInstance);
        // ReactReconciler.unmountComponent(prevComponentInstance, false);

        // this._renderedNodeType = ReactNodeTypes.getType(nextRenderedElement);
        // this._renderedComponent = this._instantiateReactComponent(nextRenderedElement);
        // var nextMarkup = ReactReconciler.mountComponent(this._renderedComponent, transaction, this._nativeParent, this._nativeContainerInfo, this._processChildContext(context));
        // this._replaceNodeWithMarkup(oldNativeNode, nextMarkup);
    }
}

class AkkadRender {
    _mounted = false;
    _wrapperInstance = null;
    _oldChildren = null;
    _oldContext = null;

    render(newChildren, newContext) {
        // If this is the first run.
        var transaction = ReactUpdates.ReactReconcileTransaction.getPooled();

        if (Object.is(this._mounted, false)) {
            // console.log('newChildren', newChildren);
            ReactDefaultInjection.inject(); // Don't understand why I need to call this...

            var wrapperInstance = instantiateReactComponent(newChildren);
            // console.log('instance', wrapperInstance);
            // const fakeNativeNode = document.createElement('div');
            // console.log('fakeParent', fakeParent);
            // const fakeDOMComponent = new ReactDOMEmptyComponent();
            // const stuff = Object.assign(fakeDOMComponent, {
            //     _nativeNode: fakeNativeNode
            // });

            // const fakeParent = null;
            // console.log('stuff', stuff);
            // console.log('wrapperInstance', wrapperInstance);
            console.log(wrapperInstance, ReactMultiChild.Mixin);

            // for (let method in ReactMultiChild.Mixin) {
            //     console.log('METHOD', method);
            //     wrapperInstance.prototype[method] = ReactMultiChild.Mixin[method];
            // }
            const newWrapperInstance = Object.assign({}, wrapperInstance, ReactMultiChild.Mixin);
            console.log(newWrapperInstance);
            newWrapperInstance.mountChildren(newChildren, transaction, newContext);
            // ReactReconciler.mountComponent(wrapperInstance, transaction, stuff, ReactDOMContainerInfo(wrapperInstance), newContext);
            // const newStuff = Object.assign(new Object().prototype, ReactMultiChild.Mixin);
            // const reallyNewStuff = Object.assign({}, wrapperInstance, newStuff);
            // console.log('newStuff', newStuff, reallyNewStuff);
            ReactUpdates.ReactReconcileTransaction.release(transaction);
            // console.log("markup", markup);
            this._mounted = true;
            this._wrapperInstance = wrapperInstance;
            // this._wrapperInstance._nativeNode = {};
            // Add update method overrides.
            // this._wrapperInstance.updateComponent = updateComponent;
            // this._wrapperInstance._processPendingState = _processPendingState;
            // this._wrapperInstance._performComponentUpdate = _performComponentUpdate;
            // this._wrapperInstance._updateRenderedComponent = _updateRenderedComponent;
            this._oldChildren = newChildren;
            this._oldContext = newContext;
            return;
        } else {
            console.log('_wrapperInstance');
            console.log(this._wrapperInstance);
            // this._wrapperInstance.updateComponent(transaction, this._oldChildren, newChildren, this._oldContext, newContext);
            // updateComponent.call(this._wrapperInstance, transaction, this._oldChildren, newChildren, this._oldContext, newContext);
            ReactUpdates.ReactReconcileTransaction.release(transaction);
        }
    }
}

export default AkkadRender;
