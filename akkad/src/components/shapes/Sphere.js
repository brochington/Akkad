import React, {PropTypes} from "react";
import Entity from "../Entity";
import {RenderShape} from "../systems";
import Babylon from "babylonjs";

class Sphere extends React.Component {
    render() {
        return (
            <Entity>
                <RenderShape 
                    type="sphere"
                    segments={24}
                    diameterX={3}
                    diameterY={3}
                    diameterZ={3}
                />
                {this.props.children}
            </Entity>
        );
    }
}

export default Sphere;