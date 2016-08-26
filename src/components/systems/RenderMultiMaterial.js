import {PropTypes} from "react";
import AbstractSystemComponent from "../AbstractSystemComponent";

class RenderMultiMaterial extends AbstractSystemComponent {
    static propTypes = {
        targetEntityID: PropTypes.string
    };

    static contextTypes = {
        sceneID: PropTypes.string.isRequired,
        entityID: PropTypes.string,
        appState: PropTypes.object,
        actions: PropTypes.object
    };

    componentWillMount() {
        const {actions, entityID, sceneID} = this.context;
        // const {targetEntityID} = this.props;
        const {createMultiMaterial} = actions._internal;

        createMultiMaterial(entityID, sceneID);
    }
}

export default RenderMultiMaterial;
