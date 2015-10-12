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
    MaterialAlpha,
    Gravity
} = systems;

class App extends Component {
    clickMe = () => {
        console.log("clicked me!!");
    }

    render() {
        const boxes = [1, 2, 3, 4, 5].map(val => {
            return (
                <Box key={`box-${val}`}>
                    <PositionMesh
                        x={val}
                        y={val}
                        z={val}
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
            );
        });

        return (
            <Scene>
                <Gravity />
                <FreeCamera
                    initialPosition={[0, 5, -10]}
                    target={[0, 1, 0]}
                >

                </FreeCamera>
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
                {boxes}
                <Ground 
                    height={300}
                    width={300}
                />
            </Scene>
        );
    }
}

export default App;