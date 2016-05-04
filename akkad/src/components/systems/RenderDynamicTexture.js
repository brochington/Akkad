import {PropTypes} from "react";
import AbstractSystemComponent from "../AbstractSystemComponent";

class RenderDynamicTexture extends AbstractSystemComponent {
    static contextTypes = {
        sceneID: PropTypes.string.isRequired,
        entityID: PropTypes.string,
        appState: PropTypes.object,
        actions: PropTypes.object
    }

    componentWillMount() {
        const {sceneID, actions, entityID} = this.context;
        const {createDynamicTexture} = actions._internal;

        createDynamicTexture(entityID, sceneID);
    }
}

export default RenderDynamicTexture;
