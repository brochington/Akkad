import React, {PropTypes} from "react";
import AbstractLight from "./AbstractLight";
import Babylon from "babylonjs";

class HemisphericLight extends AbstractLight {
    componentWillUpdate(nextState, nextProps, nextContext) {
        const {appState, actions} = nextContext;
        
        if (appState && appState.has("scene") && !appState.has("light")) {
            const {id} = this.props;
            actions.setLight({
                type: "hemispheric"
            });
        }
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>

        );
    }
}

export default HemisphericLight;