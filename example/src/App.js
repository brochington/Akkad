import React, {Component} from 'react';
import {
    Scene,
    Entity,
    cameras,
    lights,
    shapes,
    ecsComponents
} from "akkad";

const {FreeCamera} = cameras;
const {HemisphericLight} = lights;
const {Sphere, Box} = shapes;
const {Position} = ecsComponents;

export class App extends Component {
  render() {
    return (
        <Scene>
            <FreeCamera 
                active={true}
                target={[0, 0, 0]}
            />
            <HemisphericLight />
            <Sphere>
                <Position
                    x={2}
                    y={-1}
                    z={0}
                />
            </Sphere>
            <Box>
                <Position
                    x={0}
                    y={0}
                    z={0}
                />
            </Box>
        </Scene>
    );
  }
}