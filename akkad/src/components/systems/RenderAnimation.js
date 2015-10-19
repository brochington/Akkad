import {PropTypes} from "react";
import AkkadAbstractComponent from "../AkkadAbstractComponent";

class RenderAnimation extends AkkadAbstractComponent {
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
}

export default RenderAnimation;