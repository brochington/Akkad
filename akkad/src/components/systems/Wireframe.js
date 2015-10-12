import React, {PropTypes} from "react";
import AkkadAbstractComponent from "../AkkadAbstractComponent";

class Wireframe extends AkkadAbstractComponent {
    static contextTypes = {
        meshID: PropTypes.string,
        entityID: PropTypes.string,
        appState: PropTypes.object, 
        actions: PropTypes.object,
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false
    }

    componentWillMount() {
        const {appState, meshID} = this.context;

        const material = appState.getIn(["meshes", meshID, "material"]);
        material.wireframe = true;
    }

    componentWillUnmount() {
        const {appState, meshID} = this.context;

        const material = appState.getIn(["meshes", meshID, "material"]);
        material.wireframe = false;
    }
}

export default Wireframe;