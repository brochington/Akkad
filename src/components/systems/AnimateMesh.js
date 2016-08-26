import {PropTypes} from "react";
import AbstractSystemComponent from "../AbstractSystemComponent";

class AnimateMesh extends AbstractSystemComponent {
    static contextTypes = {
        sceneID: PropTypes.string.isRequired,
        entityID: PropTypes.string.isRequired,
        appState: PropTypes.object,
        actions: PropTypes.object
    }

    static propTypes = {
        targetEntityID: PropTypes.string,
        propertyName: PropTypes.string,
        keyFrames: PropTypes.array,
        startFrame: PropTypes.number,
        endFrame: PropTypes.number
    }

    static defaultProps = {
        startFrame: 0,
        endFrame: 100
    }

    componentDidMount() {
        const {sceneID, entityID, appState} = this.context;
        const {
            targetEntityID,
            keyFrames,
            startFrame,
            endFrame
        } = this.props;

        const targetMesh = appState.getIn(["entities", targetEntityID, "entity"]);
        const scene = appState.getIn(["entities", sceneID, "entity"]);
        const animation = appState.getIn(["entities", entityID, "entity"]);

        animation.setKeys(keyFrames);

        targetMesh.animations.push(animation);

        scene.beginAnimation(targetMesh, startFrame, endFrame, true);
    }

    componentWillUnmount() {
        // TODO: remove and dispose of animation when component is unmounted.
    }
}

export default AnimateMesh;
