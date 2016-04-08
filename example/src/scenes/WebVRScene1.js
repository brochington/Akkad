import React, {Component, PropTypes} from 'react';
import {Akkad, Scene, Material, shapes, cameras, lights, systems} from "akkad";

const {WebVRFreeCamera} = cameras;
const {HemisphericLight} = lights;
const {
    Position,
    Rotate,
    Color,
    Gravity,
    Trigger,
    ApplyGravity,
    CheckCollisions,
    CollisionsEnabled
} = systems;

const {
    Box,
    Sphere,
    Disc,
    Cylinder,
    Torus,
    Ground
} = shapes;

class WebVRScene1 extends Component {
    static contextTypes = {
        actions: PropTypes.object,
        appState: PropTypes.object
    }

    render() {
        const {testKeyDown} = this.context.actions;
        return (
            <div>
                <Scene>
                    <CollisionsEnabled />
                    <Gravity vector={[0, -0.9, 0]} />
                    <WebVRFreeCamera
                        initialPosition={[0, 0, 10]}
                        target={[0, 0, 0]}
                    >
                        <CheckCollisions />
                        <ApplyGravity />
                    </WebVRFreeCamera>
                    <HemisphericLight />
                    <Box>
                        <Position vector={[2, 0, 0]} />
                    </Box>
                    <Sphere
                        segments={24}
                        diameter={2}
                    >
                        <Position vector={[-2, 0, 0]} />
                    </Sphere>
                    <Cylinder>
                        <Rotate
                            axis={[1, 1.2, 0]}
                            amount={60}
                            space="LOCAL"
                        />
                    </Cylinder>
                    <Torus
                        diameter={2}
                        thickness={.5}
                        tessellation={30}
                    >
                        <Position vector={[4, 0, 1]} />
                        <Rotate
                            axis={[1, 1.2, 0]}
                            amount={60}
                            space="LOCAL"
                        />
                    </Torus>
                    <Ground
                        height={300}
                        width={300}
                    >
                        <CheckCollisions />
                        <Position vector={[0, -2, 0]} />
                        <Material>
                            <Color color={[0, 1, 1]} />
                        </Material>
                    </Ground>
                </Scene>
            </div>
        );
    }
}

export default WebVRScene1;
