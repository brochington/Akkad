import React, {Component, PropTypes} from 'react';
import Immutable, {fromJS} from 'immutable';
import {
    Akkad,
    Scene,
    Material,
    cameras,
    lights,
    shapes,
    systems,
    dynamicTextureSystems
} from 'akkad';

const {ArcRotateCamera} = cameras;
const {HemisphericLight} = lights;
const {Box, Ground} = shapes;
const {
    Position,
    Rotate,
    Physics,
    Color,
    CheckCollisions,
    CollisionsEnabled,
    PhysicsState,
    DynamicTexture,
} = systems;

const {
    FillStyle,
    FillRect
} = dynamicTextureSystems;

class DynamicTextureScene extends Component {
    static contextTypes = {
        actions: PropTypes.object,
        appState: PropTypes.object
    }

    saveContext = (context) => {
        this._context = context;
    };

    saveSize = (size) => {
        this.size = size;
    };

    render() {
        if (this._context) {
            const context = this._context;
            context.fillStyle = "#123456";
            context.fillRect(0, 0, 300, 300);
        }

        return (
            <Scene>
                <CollisionsEnabled />
                <ArcRotateCamera
                    position={[-20, 11, 3]}
                    target={[0, -3, 0]}
                />
                <HemisphericLight />
                <Box updatable size={5} >
                    <CheckCollisions />
                    <Position vector={[0, 3, 0]} />
                    <Material>
                        <DynamicTexture
                            getContext={this.saveContext}
                            getSize={this.saveSize}
                        />
                    </Material>

                </Box>
                <Ground
                    height={300}
                    width={300}
                >
                    <CheckCollisions />
                    <Position vector={[0, 0, 0]} />
                    <Material>
                        <Color color={[0, 1, 1]} />
                    </Material>
                </Ground>
            </Scene>
        );
    }
}

export default DynamicTextureScene;
