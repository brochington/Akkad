import React, {Component, PropTypes} from 'react';
import {Scene, Material, shapes, cameras, lights, systems} from "akkad";
import worldHeightMap from "../img/worldHeightMap.jpg";
import worldMap from "../img/earth.jpg";

const {ArcRotateCamera} = cameras;
const {HemisphericLight} = lights;
const {Trigger, Texture} = systems;
const {Box, GroundFromHeightMap} = shapes;

class HeightMapScene extends Component {
    static contextTypes = {
        appState: PropTypes.object,
        actions: PropTypes.object
    }

    render() {
        const {appState, actions} = this.context;

        return (
            <Scene>
                <ArcRotateCamera
                    position={[0, 40, -5]}
                    target={[10, 20, 5]}
                />
                <HemisphericLight />
                <GroundFromHeightMap
                    height={200}
                    width={200}
                    subdivisions={300}
                    heightMap={worldHeightMap}
                    minHeight={0}
                    maxHeight={10}
                >
                    <Material>
                        <Texture image={worldMap}/>
                    </Material>
                </GroundFromHeightMap>
            </Scene>
        );
    }
}

export default HeightMapScene;
