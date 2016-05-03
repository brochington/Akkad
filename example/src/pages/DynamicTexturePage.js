import React, {Component, PropTypes} from 'react';
import {Akkad} from "akkad";
import DynamicTextureScene from "../scenes/DynamicTextureScene";

class DynamicTexturePage extends Component {
    render() {
        return (
            <div>
                <h2>
                    Dynamic Textures
                </h2>
                <Akkad>
                    <DynamicTextureScene />
                </Akkad>
            </div>
        );
    }
}

export default DynamicTexturePage;
