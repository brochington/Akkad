import {PropTypes} from "react";
import AbstractSystemComponent from "../AbstractSystemComponent";

class RenderAnimation extends AbstractSystemComponent {
    static contextTypes = {
        entityID: PropTypes.string,
        appState: PropTypes.object,
        actions: PropTypes.object
    }

    static propTypes = {
        meshProperty: PropTypes.string.isRequired,
        valueType: PropTypes.string.isRequired,
        loopMode: PropTypes.string.isRequired,
        keyFrames: PropTypes.array
    }

    componentWillMount() {
        const {actions, entityID} = this.context;
        const {createAnimation} = actions._internal;

        const config = {
            ...this.props,
            entityID
        };

        createAnimation(config);
    }

    componentWillUnmount() {
        const {actions, entityID} = this.context;
        const {disposeEntity} = actions._internal;

        disposeEntity(entityID);
    }
}

export default RenderAnimation;
