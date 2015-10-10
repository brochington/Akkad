import React, {PropTypes} from "react";
import Entity from "../Entity";
import {RenderShape} from "../systems";
import Babylon from "babylonjs";

class Box extends React.Component {
    static propTypes = {
        height: PropTypes.number,
        width: PropTypes.number
    }

    render() {
        const {
            height = 1,
            width = 1
        } = this.props;

        return (
            <Entity>
                <RenderShape 
                    type="box"
                    height={height}
                    width={width}
                />
                {this.props.children}
            </Entity>
        );
    }
}

export default Box;