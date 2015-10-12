import React, {Component} from 'react';
import {
    Scene,
    Material,
    cameras,
    lights,
    shapes,
    systems
} from "akkad";
import pretend from "./img/pretend.jpg";

const {FreeCamera, ArcRotateCamera} = cameras;
const {HemisphericLight} = lights;
const {Sphere, Box, Ground} = shapes;
const {
    PositionMesh, 
    RotateMesh, 
    MeshTrigger, 
    Wireframe, 
    Texture,
    MaterialAlpha
} = systems;

class App extends Component {
    clickMe = () => {
        console.log("clicked me!!");
    }

    render() {
        return (
            <Scene>
                <FreeCamera
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
                    <Material>
                        <Texture 
                            image={pretend}
                        />
                        <MaterialAlpha 
                            alpha={0.2}
                        />
                    </Material>
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
                    <Material>
                        <Wireframe />
                    </Material>
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