import React, {PropTypes} from "react";
import Babylon from "babylonjs";
import Entity from "./Entity";
import EntityLoaded from "./EntityLoaded";
import {
    RenderAnimation, 
    GenericProperty,
    AnimateMesh
} from "./systems";

class BasicAnimation extends React.Component {
    static contextTypes = {
        entityID: PropTypes.string,
        appState: PropTypes.object, 
        actions: PropTypes.object,
    }

    static propTypes = {
        meshProperty: PropTypes.string.isRequired,
        valueType: PropTypes.string.isRequired,
        loopMode: PropTypes.string.isRequired,
        keyFrames: PropTypes.array,
        startFrame: PropTypes.number,
        endFrame: PropTypes.number
    }

    render() {
        const {appState, entityID} = this.context;
        const {
            meshProperty, 
            valueType, 
            loopMode, 
            keyFrames,
            children,
            startFrame = 0,
            endFrame = 100
        } = this.props;

        const animationTargetEntity = appState.getIn(["entites", entityID, "entity"]);

        return (
            <Entity>
                <RenderAnimation {...this.props} />
                <EntityLoaded>
                    <AnimateMesh 
                        targetEntityID={entityID}
                        keyFrames={keyFrames}
                        startFrame={startFrame}
                        endFrame={endFrame}
                    />
                    {children}
                </EntityLoaded>
            </Entity>
        );
    }
}

export default BasicAnimation;

