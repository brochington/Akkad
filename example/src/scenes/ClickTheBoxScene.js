import React, {Component, PropTypes} from 'react';
import {Scene, shapes, cameras, lights, systems} from "akkad";

const {ArcRotateCamera} = cameras;
const {HemisphericLight} = lights;
const {Trigger, Position} = systems;
const {Box, Sphere} = shapes;

class ClickTheBoxScene extends Component {
    static contextTypes = {
        appState: PropTypes.object,
        actions: PropTypes.object
    }

    render() {

        const {appState, actions} = this.context;

        return (
            <div>
                <div>
                    count: {appState.get("count")}
                </div>
                <Scene>
                    <ArcRotateCamera
                        position={[3, 4, -5]}
                        target={[0, 1, 0]}
                    />
                    <HemisphericLight />
                    <Box>
                        <Trigger onClick={actions.increment} />
                    </Box>
                    <Box>
                        <Position vector={[2, 0, 0]} />
                    </Box>
                    <Sphere
                        segments={24}
                        diameter={2}
                    >
                        <Position vector={[-2, 0, 0]} />
                    </Sphere>
                </Scene>
            </div>
        );
    }
}

export default ClickTheBoxScene;
