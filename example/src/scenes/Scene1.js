import React, {Component, PropTypes} from 'react';
import Immutable, {fromJS} from 'immutable';
import {Akkad, Scene, Material, cameras, lights, shapes, systems} from 'akkad';

const {ArcRotateCamera} = cameras;
const {HemisphericLight} = lights;
const {Box} = shapes;
const {Trigger, Color} = systems;

class Scene1 extends Component {
    static contextTypes = {
        actions: PropTypes.object,
        appState: PropTypes.object
    }

    render() {
        const {setRandomDiffuseColor} = this.context.actions;

        return (
            <Scene>
                <ArcRotateCamera
                    position={[3, 4, -5]}
                    target={[0, 1, 0]}
                />
                <HemisphericLight />
                <Box>
                    <Material>
                        <Color color={[0.2, 0.5, 0.7]} />
                    </Material>
                    <Trigger onClick={setRandomDiffuseColor} />
                </Box>
            </Scene>
        );
    }
}

export default Scene1;
