import React, {PropTypes} from "react";
import ReactDOM from "react-dom";
import Immutable from "immutable";
import AkkadComponent from "./AkkadComponent";
import Babylon from "babylonjs";
import actions from "../actions";
import {StateManager} from "../classes";

const stateManager = new StateManager();

const initState = {
    meshes: {}
}

class Engine extends AkkadComponent {
    static propTypes = {
        canvasStyles: PropTypes.object,
    }

    componentWillMount() {
    }

    componentWillUpdate(nextProps, nextState) {
        // for debugging state: 
        window.state = nextState.appState.toJS();
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
            appState: stateManager.appState
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
