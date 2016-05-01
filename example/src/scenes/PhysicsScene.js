import React, {Component, PropTypes} from 'react';
import Immutable, {fromJS} from 'immutable';
import {Akkad, Scene, Material, cameras, lights, shapes, systems} from 'akkad';

const {ArcRotateCamera} = cameras;
const {HemisphericLight} = lights;
const {Box, Ground} = shapes;
const {
    Position,
    Rotate,
    Physics,
    Color,
    CheckCollisions,
    CollisionsEnabled,
    PhysicsState
} = systems;

class PhysicsScene extends Component {
    static contextTypes = {
        actions: PropTypes.object,
        appState: PropTypes.object
    }

    render() {
        return (
            <Scene>
                <CollisionsEnabled />
                <Physics gravity={[0, -10, 0]} />
                <ArcRotateCamera
                    position={[-14, 6, -13]}
                    target={[0, -3, 0]}
                />
                <HemisphericLight />
                <Box>
                    <CheckCollisions />
                    <Position vector={[0, 2, 0]} />
                    <Rotate
                        axis={[1, 1.7, 0]}
                        amount={60}
                        space="LOCAL"
                    />
                    <Material>
                        <Color color={[0.2, 0.5, 0.9]} />
                    </Material>
                    <PhysicsState mass={3} />
                </Box>
                <Ground
                    height={300}
                    width={300}
                >
                    <CheckCollisions />
                    <Position vector={[0, -10, 0]} />
                    <Material>
                        <Color color={[0, 1, 1]} />
                    </Material>
                    <PhysicsState mass={0} />
                </Ground>
            </Scene>
        );
    }
}

export default PhysicsScene;
