import React, {PropTypes} from "react";
import Immutable from "immutable";
import Babylon from "babylonjs";
import _actions from "../actions";
import systems from "./systems";
import {StateManager} from "../classes";
import Engine from "./Engine";

const stateManager = new StateManager();

const initState = {
    lights: {}
}

class Akkad extends React.Component {
    static propTypes = {
        canvasNode: PropTypes.object,
        actions: PropTypes.object
    }

    componentWillMount() {
        const actions = {
            ...this.props.actions,
            _internal: _actions
        }

        stateManager.init(
            actions, // actions object
            actions => Immutable.fromJS(initState), // init function
            (appState, actions) => this.setState({appState, actions}) // called after action is returned.
        );
        
        stateManager.actions._internal.setCanvas(this.props.canvasNode);
    }

    render() {
        const {children} = this.props;
        const canvas = stateManager.appState.get("canvas");
        
        const engine = canvas && (
            <Engine 
                appState={stateManager.appState}
                actions={stateManager.actions}
            >
                {children}
            </Engine>
        );

        return stateManager.actions && stateManager.appState && (
            <div>
                {engine}
            </div>
        )
        
    }
}

export default Akkad;
