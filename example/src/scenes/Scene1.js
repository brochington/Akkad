import React, {Component, PropTypes} from 'react';
import {Akkad} from "akkad";
import {Scene, Material, cameras, lights, shapes, systems} from "akkad";

const {ArcRotateCamera} = cameras;
const {HemisphericLight} = lights;
const {Box} = shapes;
const {Trigger} = systems;

class Scene1 extends Component {
    static contextTypes = {
        actions: PropTypes.object
    }

    render() {
        const {setRandomDiffuseColor} = this.context.actions;
        return (
            <Scene>
                <ArcRotateCamera
                    initialPosition={[0, 5, -10]}
                    target={[0, 1, 0]}
                />
                <HemisphericLight />
                <Box>
                    <Material />
                    <Trigger onClick={setRandomDiffuseColor} />
                </Box>
            </Scene>
        );
    }
}

export default Scene1;
