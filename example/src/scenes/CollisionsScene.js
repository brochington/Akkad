import React, {Component, PropTypes} from 'react';
import {Akkad, Scene, shapes, cameras, lights, systems} from "akkad";
import skullMesh from "../meshes/skull.babylon";

const {FreeCamera} = cameras;
const {HemisphericLight} = lights;
const {
    Position,
    Rotate,
    Gravity,
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

class CollisionsScene extends Component {
    static contextTypes = {
        actions: PropTypes.object
    }

    render() {
        const {setRandomDiffuseColor} = this.context.actions;
        return (
            <Scene>
                <CollisionsEnabled />
                <Gravity vector={[0, -0.9, 0]} />
                <FreeCamera
                    initialPosition={[0, 0, 10]}
                    target={[0, 0, 0]}
                >
                    <CheckCollisions />
                    <ApplyGravity />
                </FreeCamera>
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
                    <Position vector={[0, -2, 0]} />
                    <CheckCollisions />
                </Ground>
            </Scene>
        );
    }
}

export default CollisionsScene;
