import React, {PropTypes} from "react";
import Entity from "../Entity";
import {RenderShape} from "../systems";
import Babylon from "babylonjs";

class Sphere extends React.Component {
    static propTypes = {
        segments: PropTypes.number,
        diameterX: PropTypes.number,
        diameterY: PropTypes.number,
        diameterZ: PropTypes.number
    }

    render() {
        const {segments, diameterX, diameterY, diameterZ} = this.props;
        return (
            <Entity>
                <RenderShape 
                    type="sphere"
                    segments={segments}
                    diameterX={diameterX}
                    diameterY={diameterY}
                    diameterZ={diameterZ}
                />
                {this.props.children}
            </Entity>
        );
    }
}

export default Sphere;