import React, {Component, PropTypes} from 'react';
import Babylon from "babylonjs";
import {Scene, Particles, Material, BasicAnimation, cameras, lights, shapes, systems} from "akkad";
import pretend from "./img/pretend.jpg";
import flare from "./img/flare.png";
import skullMesh from "./meshes/skull.babylon";

const {FreeCamera, ArcRotateCamera} = cameras;
const {HemisphericLight} = lights;
const {Sphere, Box, Ground} = shapes;
const {
    Position, 
    Rotate, 
    Wireframe, 
    Texture,
    MaterialAlpha,
    Gravity,
    ApplyGravity,
    CheckCollisions,
    CollisionsEnabled,
    GenericProperty,
    Trigger,
    Mesh
} = systems;

const testKeyFrames = [{
    frame: 0,
    value: 1
}, {
    frame: 20,
    value: 0.2
}, {
    frame: 100,
    value: 1
}]

class App extends Component {
    static contextTypes = {
        actions: PropTypes.object
    }

    clickMe = (evt, meshID, triggerID) => {
        console.log("clicked me!!", evt, meshID, triggerID);
    }

    render() {
        const {setRandomDiffuseColor} = this.context.actions;
        const boxes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(val => {
            return (
                <Box key={`box-${val}`}>
                    <CheckCollisions />
                    <Position
                        vector={[2,val,val]}
                    />
                    <Material>
                        <Texture image={pretend}/>
                    </Material>
                    <BasicAnimation 
                        meshProperty="rotation.y"
                        valueType="float"
                        loopMode="cycle"
                        keyFrames={testKeyFrames}
                    />
                    <BasicAnimation 
                        meshProperty="rotation.x"
                        valueType="float"
                        loopMode="cycle"
                        keyFrames={testKeyFrames}
                    />
                    <Trigger onClick={setRandomDiffuseColor} />
                </Box>
            );
        });

        return (
            <Scene>
                <CollisionsEnabled />
                <Gravity vector={[0, -0.9, 0]} />
                <FreeCamera
                    initialPosition={[0, 5, -10]}
                    target={[0, 1, 0]}
                >
                    <CheckCollisions />
                    <ApplyGravity />
                </FreeCamera>
                <HemisphericLight />
                <Mesh 
                    path={skullMesh.split("/")[1] + "/"}
                    fileName={skullMesh.split("/")[2]}
                />
                <Sphere
                    segments={24}
                    diameterX={2}
                    diameterY={2}
                    diameterZ={2}
                >
                    <Position vector={[0,2,0]} />
                    <Material>
                        <Wireframe />
                    </Material>
                </Sphere>
                <Sphere
                    segments={24}
                    diameterX={2}
                    diameterY={2}
                    diameterZ={2}
                >
                    <Particles img={flare}>
                        <GenericProperty 
                            propertyName="textureMask"
                            onVal={new Babylon.Color3(0.1, 0.8, 1.0)}
                        />
                    </Particles>
                    <Position vector={[-3,2,0]} />
                    <CheckCollisions />
                    <Material>
                        <GenericProperty 
                            propertyName="diffuseColor"
                            onVal={new Babylon.Color3(1.0, 0.2, 0.7)}
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
