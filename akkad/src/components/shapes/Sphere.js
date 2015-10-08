import React, {PropTypes} from "react";
import AkkadAbstractComponent from "../AkkadAbstractComponent";
import Babylon from "babylonjs";

class Sphere extends AkkadAbstractComponent {
    static propTypes = {
        segments: PropTypes.number.isRequired,
        diameter: PropTypes.number.isRequired
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        const {appState, actions} = nextContext;

        if(appState && appState.has("scene")) {
            if (!appState.hasIn(["meshes", this.id])) {

                actions.createSphere({
                    id: this.id,
                    props: nextProps
                });
            } else {
                actions.updateSphere({
                    id: this.id,
                    props: nextProps
                });
            }
        }
    }
}

export default Sphere;