import React, {PropTypes} from "react";
import Entity from "../Entity";
import {RenderShape} from "../ecsComponents";
import Babylon from "babylonjs";

class Box extends React.Component {
    render() {
        return (
            <Entity>
                <RenderShape 
                    type="box"
                    height={1}
                    width={1}
                    faceColors={[100, 255, 23, 0.5]}
                />
                {this.props.children}
            </Entity>
        );
    }
}

export default Box;