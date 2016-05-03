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

class DynamicTextureScene extends Component {
    static contextTypes = {
        actions: PropTypes.object,
        appState: PropTypes.object
    }

    render() {
        return (
            <Scene>
                <CollisionsEnabled />
                <ArcRotateCamera
                    position={[-20, 10, 3]}
                    target={[0, -3, 0]}
                />
                <HemisphericLight />
                <Box updatable size={5} >
                    <CheckCollisions />
                    <Position vector={[0, 3, 0]} />
                    <Material>
                        <Color color={[0.2, 0.5, 0.9]} />
                    </Material>
                </Box>
                <Ground
                    height={300}
                    width={300}
                >
                    <CheckCollisions />
                    <Position vector={[0, 0, 0]} />
                    <Material>
                        <Color color={[0, 1, 1]} />
                    </Material>
                </Ground>
            </Scene>
        );
    }
}

export default DynamicTextureScene;
