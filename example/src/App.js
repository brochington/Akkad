import React, {Component} from 'react';
import {Scene, cameras, lights, shapes, meshes} from "akkad";


const {FreeCamera} = cameras;
const {HemisphericLight} = lights;
const {Sphere} = shapes;
const {Ground} = meshes;

export class App extends Component {
  render() {
    return (
        <Scene>
            <FreeCamera 
                active={true}
                target={[0, 0, 0]}
            />
            <HemisphericLight />
            <Sphere
                segments={24}
                diameter={2}
                position={[0, 3, -1]}
            />
            <Sphere
                segments={24}
                diameter={1}
                position={[0, 1, 0]}
            />
            <Ground />
        </Scene>
    );
  }
}