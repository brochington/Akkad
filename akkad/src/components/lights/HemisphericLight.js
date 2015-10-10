import React, {PropTypes} from "react";
import Entity from "../Entity";
import {RenderLight} from "../systems";
import Babylon from "babylonjs";

class HemisphericLight extends React.Component {
    render() {
        return (
            <Entity>
                <RenderLight 
                    type="hemispheric"
                />
                {this.props.children}
            </Entity>
        );
    }
}

export default HemisphericLight;