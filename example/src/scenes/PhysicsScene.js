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

        const boxes = Immutable.Range(0, 160).map((v) => (
            <Box>
                <CheckCollisions />
                <Position vector={[Math.random() * 6, 2, Math.random()]} />
                <Rotate
                    axis={[1, 1.9, 1]}
                    amount={60}
                    space="LOCAL"
                />
                <Material>
                    <Color color={[0.2, 0.5, 0.9]} />
                </Material>
                <PhysicsState mass={3} />
            </Box>
        ));

        return (
            <Scene>
                <CollisionsEnabled />
                <Physics gravity={[0, -10, 0]} />
                <ArcRotateCamera
                    position={[-14, 24, -16]}
                    target={[0, -3, 0]}
                />
                <HemisphericLight />
                {boxes}
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
