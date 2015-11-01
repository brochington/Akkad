import React, {PropTypes} from "react";
import Immutable from "immutable";
import _actions from "../actions";
import {StateManager} from "../classes";
import PropsToContext from "./PropsToContext";

class Akkad extends React.Component {
    constructor() {
        super();

        this.stateManager = new StateManager();
    }
    static propTypes = {
        canvasNode: PropTypes.object,
        actions: PropTypes.object,
        styles: PropTypes.object,
        initState: PropTypes.object
    }

    componentWillMount() {
        const actions = {
            ...this.props.actions,
            _internal: _actions
        };

        this.stateManager.init(
            actions, // actions object
            () => Immutable.fromJS(this.props.initState || {}), // init function
            (appState, actions) => this.setState({appState, actions}) // called after action is returned.
        );
    }

    render() {
        const {stateManager} = this;
        const {children} = this.props;

        return stateManager.actions && stateManager.appState && (
            <PropsToContext 
                actions={stateManager.actions}
                appState={stateManager.appState}
            >
                {children}
            </PropsToContext>
        );
    }
}

export default Akkad;
