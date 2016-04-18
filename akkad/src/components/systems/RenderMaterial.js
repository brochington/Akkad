import {PropTypes} from "react";
import AbstractSystemComponent from "../AbstractSystemComponent";

class RenderMaterial extends AbstractSystemComponent {
    static contextTypes = {
        sceneID: PropTypes.string.isRequired,
        entityID: PropTypes.string,
        appState: PropTypes.object,
        actions: PropTypes.object
    }

    componentWillMount() {
        const {sceneID, actions, entityID} = this.context;
        const {createMaterial} = actions._internal;

        createMaterial(sceneID, entityID);
    }
}

export default RenderMaterial;
