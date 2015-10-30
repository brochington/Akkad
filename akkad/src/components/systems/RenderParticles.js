import {PropTypes} from "react";
import AkkadAbstractComponent from "../AkkadAbstractComponent";

class RenderParticles extends AkkadAbstractComponent {
    static contextTypes = {
        entityID: PropTypes.string,
        appState: PropTypes.object, 
        actions: PropTypes.object
    }

    static propTypes = {
        targetEntityID: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired
    }

    componentWillMount() {
        const {actions, entityID} = this.context;
        const {targetEntityID, img} = this.props;
        const {createParticles} = actions._internal;

        createParticles(entityID, targetEntityID, img);
    }

    componentWillUnmount() {
        const {actions, entityID} = this.context;
        const {disposeEntity} = actions._internal;

        disposeEntity(entityID);
    }
}

export default RenderParticles;