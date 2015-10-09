import React, {PropTypes} from "react";
import ReactMultiChild from "react/lib/ReactMultiChild";
import {ReactReconcileTransaction} from "react/lib/ReactUpdates";
import ReactDOM from "react-dom";
import Immutable from "immutable";
import Babylon from "babylonjs";
import actions from "../actions";
import systems from "../systems";
import {StateManager} from "../classes";

const stateManager = new StateManager();

const initState = {
    meshes: {},
    lights: {}
}

class Engine extends React.Component {
    constructor() {
        super();

        /* Poor man's way to do a mixin with a class */
        Object.keys(ReactMultiChild.Mixin)
              .map(method => this[method] = ReactMultiChild.Mixin[method]);
    }
    static propTypes = {
        canvasStyles: PropTypes.object,
    }

    /* Need to define the root node so that you don't get undefined.0 */
    _rootNodeID = ".0"
    
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
        const mountedImages = this.mountChildren(...args);
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
        // for debugging state: 
        window.state = nextState.appState.toJS();
        window.babylon = Babylon
        //
        this.updateAppChildren(nextState);
    }

    componentDidMount() {
        
        // TODO: figure out rootNode issue, so that refs and react.findDOMNode() can be used.
        const canvas = document.getElementById("akkad-canvas");

        stateManager.init(
            actions, // actions object
            actions => Immutable.fromJS(initState), // init function
            (appState, actions) => this.setState({appState, actions}) // called after action is returned.
        );

        const {setEngine} = stateManager.actions;

        setEngine(canvas);

        this.mountAppChildren({
            actions: stateManager.actions,
            appState: stateManager.appState,
            systems
        });
    }

    componentWillUnmount() {
        this.unmountChildren();
    }

    render() {
        const {canvasStyles} = this.props;
        return (
            <div>
                <canvas 
                    id="akkad-canvas"
                    style={canvasStyles} 
                />
            </div>
        );
    }
}

export default Engine;
