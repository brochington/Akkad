import React, {PropTypes} from "react";
import Immutable from "immutable";
import _actions from "../actions";
import {StateManager} from "../classes";
import Entity from "./Entity";
import EntityLoaded from "./EntityLoaded";
import DOMInjector from "./DOMInjector";
import {RenderAkkadCanvas} from "./systems";

const initState = {};

class Akkad extends React.Component {
    constructor() {
        super();

        this.stateManager = new StateManager();
    }
    static propTypes = {
        canvasNode: PropTypes.object,
        actions: PropTypes.object,
        styles: PropTypes.object
    }

    componentWillMount() {
        const actions = {
            ...this.props.actions,
            _internal: _actions
        };

        this.stateManager.init(
            actions, // actions object
            () => Immutable.fromJS(initState), // init function
            (appState, actions) => this.setState({appState, actions}) // called after action is returned.
        );
    }

    render() {
        const {stateManager} = this;
        const {children, styles} = this.props;

        return stateManager.actions && stateManager.appState && (
            <Entity>
                <RenderAkkadCanvas
                    appState={stateManager.appState}
                    actions={stateManager.actions}
                    styles={styles}
                />
                <EntityLoaded appState={stateManager.appState}>
                    <DOMInjector
                        appState={stateManager.appState}
                        actions={stateManager.actions}
                    >
                        {children}
                    </DOMInjector>
                </EntityLoaded>
            </Entity>
        );
    }
}

export default Akkad;
