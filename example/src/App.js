import React, {Component} from 'react';
import {
    Scene,
    Entity,
    cameras,
    lights,
    shapes,
    systems
} from "akkad";

const {FreeCamera} = cameras;
const {HemisphericLight} = lights;
const {Sphere, Box} = shapes;
const {PositionMesh, RotateMesh} = systems;

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
                <PositionMesh
                    x={3}
                    y={-1}
                    z={0}
                />
            </Sphere>
            <Box>
                <PositionMesh
                    x={0}
                    y={0}
                    z={0}
                />
                <RotateMesh
                    axis={[0, 1, 0]}
                    amount={5}
                    space="LOCAL"
                />
            </Box>
        </Scene>
    );
  }
}

