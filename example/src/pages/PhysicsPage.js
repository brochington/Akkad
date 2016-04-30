import React, {Component, PropTypes} from 'react';
import {Akkad, Scene, shapes, cameras, lights, systems} from "akkad";
import PhysicsScene from '../scenes/PhysicsScene';
const {ArcRotateCamera} = cameras;
const {HemisphericLight} = lights;
const {Mesh, Position, Rotate} = systems;

class PhysicsPage extends Component {
    render() {
        return (
            <div>
                <h2>
                    Physics Example
                </h2>
                <Akkad>
                    <PhysicsScene />
                </Akkad>
            </div>
        );
    }
}

export default PhysicsPage;
