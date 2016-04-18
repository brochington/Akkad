import {PropTypes} from "react";
import AbstractSystemComponent from "../AbstractSystemComponent";

class RenderLight extends AbstractSystemComponent {
    static propTypes = {
        type: PropTypes.string
    }

    static contextTypes = {
        sceneID: PropTypes.string.isRequired,
        entityID: PropTypes.string,
        actions: PropTypes.object.isRequired,
        appState: PropTypes.object.isRequired
    }

    componentWillMount() {
        const {actions, sceneID, entityID} = this.context;
        const {createLight} = actions._internal;

        createLight(sceneID, entityID, this.props);
    }

    componentWillUnmount() {
        const {actions, entityID} = this.context;
        const {disposeEntity} = actions._internal;

        disposeEntity(entityID);
    }
}

export default RenderLight;
