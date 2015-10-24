import React, {PropTypes} from "react";
import ReactMultiChild from "react/lib/ReactMultiChild";
import {ReactReconcileTransaction} from "react/lib/ReactUpdates";
import systems from "./systems";

class Engine extends React.Component {
    constructor(props) {
        super(props);

        const {reactid} = props;

        this._rootNodeID = reactid;

        this.id = Math.floor((1 + Math.random()) * 10000000000).toString(16);

        /* Poor man's way to do a mixin with a class */
        Object.keys(ReactMultiChild.Mixin)
              .map(method => this[method] = ReactMultiChild.Mixin[method]);
    }

    static propTypes = {
        actions: PropTypes.object,
        appState: PropTypes.object,
        reactid: PropTypes.string
    }
    
    _performTransaction(func, scope, children, context) {
        const transaction = ReactReconcileTransaction.getPooled();
        transaction.perform(
            func, 
            scope, 
            children, 
            transaction, 
            context
        );
        
        ReactReconcileTransaction.release(transaction);
    }

    mountAppChildren(context = {}) {
        this._performTransaction(
            this._mountAppChildren,
            this,
            this.props.children,
            context
        );
    }

    _mountAppChildren(...args) {
        this.mountChildren(...args);
    }

    updateAppChildren(context = {}) {
        this._performTransaction(
            this.updateChildren,
            this,
            this.props.children,
            context
        );
    }

    _updateAppChildren(...args) {
        this.updateChildren(...args);
    }

    componentWillUpdate(nextProps, nextState) {
        this.updateAppChildren(nextState);
    }

    componentDidMount() {
        const {actions, appState} = this.props;
        const {setEngine} = actions._internal;
        const canvasID = appState.get("canvasID");

        setEngine(canvasID, this.id, ::this.setState);

        this.mountAppChildren({
            actions,
            appState,
            systems
        });
    }

    componentWillUnmount() {
        this.unmountChildren();
    }

    render() {
        return (
            <div />
        );
        
    }
}

export default Engine;
