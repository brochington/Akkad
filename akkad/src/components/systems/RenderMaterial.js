import {PropTypes} from "react";
import AkkadAbstractComponent from "../AkkadAbstractComponent";

class RenderMaterial extends AkkadAbstractComponent {
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