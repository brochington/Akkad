import React, {Component} from 'react';
import {
    Scene,
    cameras,
    lights,
    shapes,
    systems
} from "akkad";

const {FreeCamera} = cameras;
const {HemisphericLight} = lights;
const {Sphere, Box} = shapes;
const {PositionMesh, RotateMesh, MeshTrigger} = systems;

class App extends Component {
    clickMe = () => {
        console.log("clicked me!!");
    }

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
                        amount={35}
                        space="LOCAL"
                    />
                    <MeshTrigger
                        onClick={this.clickMe}
                    />
                </Box>
            </Scene>
        );
    }
}

export default App;