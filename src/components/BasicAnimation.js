import React, {PropTypes} from "react";
import Entity from "./Entity";
import EntityLoaded from "./EntityLoaded";
import {
    RenderAnimation,
    AnimateMesh
} from "./systems";

class BasicAnimation extends React.Component {
    static contextTypes = {
        entityID: PropTypes.string,
        appState: PropTypes.object, 
        actions: PropTypes.object
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
        const {entityID} = this.context;
        const {
            keyFrames,
            children,
            startFrame = 0,
            endFrame = 100
        } = this.props;

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

