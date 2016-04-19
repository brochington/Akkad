// import Immutable from 'immutable';
// import React from 'react';
import instantiateReactComponent from 'react/lib/instantiateReactComponent';
import ReactUpdates from 'react/lib/ReactUpdates';
import ReactReconciler from 'react/lib/ReactReconciler';
import ReactDefaultInjection from 'react/lib/ReactDefaultInjection';

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

class AkkadRender {
    _mounted = false;
    _wrapperInstance = null;

    render(newChildren, newContext) {
        // If this is the first run.
        var transaction = ReactUpdates.ReactReconcileTransaction.getPooled();

        if (Object.is(this._mounted, false)) {
            console.log('newChildren', newChildren);
            ReactDefaultInjection.inject(); // Don't understand why I need to call this...

            var wrapperInstance = instantiateReactComponent(newChildren);
            console.log('instance', wrapperInstance);

            var markup = ReactReconciler.mountComponent(wrapperInstance, transaction, null, ReactDOMContainerInfo(wrapperInstance), newContext);

            ReactUpdates.ReactReconcileTransaction.release(transaction);
            console.log("markup", markup);
            this._mounted = true;
            this._wrapperInstance = wrapperInstance;
            return;
        } else {
            console.log('_wrapperInstance');
            console.log(this._wrapperInstance);
            this._wrapperInstance.updateComponent(newChildren, transaction, newContext);
            ReactUpdates.ReactReconcileTransaction.release(transaction);
        }
    }
}

export default AkkadRender;
