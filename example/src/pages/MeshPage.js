import React, {Component, PropTypes} from 'react';
import {Akkad, Scene, shapes, cameras, lights, systems} from "akkad";
import skullMesh from "../meshes/skull.babylon";

const {ArcRotateCamera} = cameras;
const {HemisphericLight} = lights;
const {Mesh, Position, Rotate} = systems;

class MeshPage extends Component {
    render() {
        return (
            <div>
                <h2>
                    Mesh Example
                </h2>
                <Akkad>
                    <Scene>
                        <ArcRotateCamera 
                            initialPosition={[0, 0, 100]}
                            target={[0, 0, 0]} 
                        />
                        <HemisphericLight />
                        <Mesh 
                            path={skullMesh.split("/")[1] + "/"}
                            fileName={skullMesh.split("/")[2]}
                        >
                            <Position vector={[0, 0, 0]}/>
                            <Rotate
                                axis={[0, 1.2, 0]}
                                amount={60}
                                space="LOCAL"
                            />
                        </Mesh>
                    </Scene>
                </Akkad>
            </div>
        );
    }
}

export default MeshPage;
