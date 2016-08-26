import {PropTypes} from "react";
import AbstractSystemComponent from "../AbstractSystemComponent";

class RenderMesh extends AbstractSystemComponent {
    static contextTypes = {
        sceneID: PropTypes.string.isRequired,
        entityID: PropTypes.string,
        appState: PropTypes.object,
        actions: PropTypes.object
    }

    static propTypes = {
        targetEntityID: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
        fileName: PropTypes.string
    }

    componentDidMount() {
        const {path, fileName} = this.props;
        const {actions, sceneID, entityID} = this.context;
        const {importMesh} = actions._internal;

        importMesh(path, fileName, sceneID, entityID);
    }

    componentWillUnmount() {
        const {actions, entityID} = this.context;
        const {destroyMesh} = actions._internal;

        destroyMesh(entityID);
    }

}

export default RenderMesh;
