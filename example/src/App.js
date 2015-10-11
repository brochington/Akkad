import React, {Component} from 'react';
import {
    Scene,
    cameras,
    lights,
    shapes,
    systems
} from "akkad";

const {FreeCamera, ArcRotateCamera} = cameras;
const {HemisphericLight} = lights;
const {Sphere, Box, Ground} = shapes;
const {PositionMesh, RotateMesh, MeshTrigger} = systems;

class App extends Component {
    clickMe = () => {
        console.log("clicked me!!");
    }

    render() {
        return (
            <Scene>
                <ArcRotateCamera
                    initialPosition={[0, 5, -10]}
                    target={[0, 0, 0]}
                />
                <HemisphericLight />
                <Sphere
                    segments={24}
                    diameterX={2}
                    diameterY={2}
                    diameterZ={2}
                >
                    <PositionMesh
                        x={0}
                        y={2}
                        z={0}
                    />
                </Sphere>
                <Box>
                    <PositionMesh
                        x={2}
                        y={2}
                        z={2}
                    />
                    <RotateMesh
                        axis={[0, 1, 0]}
                        amount={35}
                        space="LOCAL"
                    />
                    <MeshTrigger
                        onClick={this.clickMe}
                    />
                </Box>
                <Ground 
                    height={10}
                    width={10}
                />
            </Scene>
        );
    }
}

export default App;