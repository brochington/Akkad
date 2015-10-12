import React, {Component} from 'react';
import {Scene, Material, cameras, lights, shapes, systems} from "akkad";
import pretend from "./img/pretend.jpg";

const {FreeCamera, ArcRotateCamera} = cameras;
const {HemisphericLight} = lights;
const {Sphere, Box, Ground} = shapes;
const {
    Position, 
    Rotate, 
    MeshTrigger, 
    Wireframe, 
    Texture,
    MaterialAlpha,
    Gravity,
    ApplyGravity,
    CheckCollisions,
    CollisionsEnabled
} = systems;

class App extends Component {
    clickMe = () => {
        console.log("clicked me!!");
    }

    render() {
        const boxes = [1, 2, 3, 4, 5].map(val => {
            return (
                <Box key={`box-${val}`}>
                    <Position
                        vector={[val,val,val]}
                    />
                    <Rotate
                        axis={[0, 1, 0]}
                        amount={35}
                        space="LOCAL"
                    />
                    <MeshTrigger
                        onClick={this.clickMe}
                    />
                    <Material>
                        <Texture 
                            image={pretend}
                        />
                        <MaterialAlpha 
                            alpha={0.2}
                        />
                    </Material>
                </Box>
            );
        });

        return (
            <Scene>
                <CollisionsEnabled />
                <Gravity vector={[0, -0.9, 0]}/>
                <FreeCamera
                    initialPosition={[0, 5, -10]}
                    target={[0, 1, 0]}
                >
                    <CheckCollisions />
                    <ApplyGravity />
                </FreeCamera>   
                <HemisphericLight />
                <Sphere
                    segments={24}
                    diameterX={2}
                    diameterY={2}
                    diameterZ={2}
                >
                    <Position
                        vector={[0,2,0]}
                    />
                    <Material>
                        <Wireframe />
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