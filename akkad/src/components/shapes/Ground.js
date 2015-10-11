import React, {PropTypes} from "react";
import Entity from "../Entity";
import {RenderShape} from "../systems";
import Babylon from "babylonjs";

class Sphere extends React.Component {
    render() {
        return (
            <Entity>
                <RenderShape 
                    type="ground"
                    width={5}
                    height={5}

                />
                {this.props.children}
            </Entity>
        );
    }
}

export default Sphere;