import React, {Component, PropTypes} from 'react';
import {Scene, shapes, cameras, lights, systems} from "akkad";

const {ArcRotateCamera} = cameras;
const {HemisphericLight} = lights;
const {Trigger} = systems;
const {Box} = shapes;

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
                        initialPosition={[3, 4, -5]}
                        target={[0, 1, 0]}
                    />
                    <HemisphericLight />
                    <Box>
                        <Trigger onClick={actions.increment} />
                    </Box>
                </Scene>
            </div>
        );
    }
}

export default ClickTheBoxScene;