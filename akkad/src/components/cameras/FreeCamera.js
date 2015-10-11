import React, {PropTypes} from "react";
import AkkadAbstractComponent from "../AkkadAbstractComponent";
import Babylon from "babylonjs";

class Camera extends AkkadAbstractComponent {
    static contextTypes = {
        appState: PropTypes.object,
        actions: PropTypes.object
    }

    componentWillMount() {
        console.log("camera will mount", this.context);
        const {appState, actions} = this.context;
        const {setCamera} = actions._internal;

        setCamera({
            type: "freeCamera"
        });
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        const {appState, actions} = nextContext;
        const {setCamera} = actions._internal;

        if (appState && appState.has("scene") && !appState.has("camera")) {
            const {id} = this.props;

            setCamera({
                type: "freeCamera"
            });
        }
    }
}

export default Camera;