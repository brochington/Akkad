import {PropTypes} from "react";
import AbstractSystemComponent from "../AbstractSystemComponent";

class RenderSubMesh extends AbstractSystemComponent {
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
        const {actions, entityID} = this.context;
        const {targetEntityID} = this.props;
        const {createSubMesh} = actions._internal;

        createSubMesh(targetEntityID, entityID, this.props.options);
    }
}

export default RenderSubMesh;
