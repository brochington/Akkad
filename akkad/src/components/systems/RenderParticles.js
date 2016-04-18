import {PropTypes} from "react";
import AbstractSystemComponent from "../AbstractSystemComponent";

class RenderParticles extends AbstractSystemComponent {
    static contextTypes = {
        sceneID: PropTypes.string.isRequired,
        entityID: PropTypes.string,
        appState: PropTypes.object,
        actions: PropTypes.object
    }

    static propTypes = {
        targetEntityID: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired
    }

    componentWillMount() {
        const {sceneID, actions, entityID} = this.context;
        const {targetEntityID, img} = this.props;
        const {createParticles} = actions._internal;

        createParticles(sceneID, entityID, targetEntityID, img);
    }

    componentWillUnmount() {
        const {actions, entityID} = this.context;
        const {disposeEntity} = actions._internal;

        disposeEntity(entityID);
    }
}

export default RenderParticles;
