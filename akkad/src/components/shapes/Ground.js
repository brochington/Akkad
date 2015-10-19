import React, {PropTypes} from "react";
import Entity from "../Entity";
import {RenderShape} from "../systems";

class Sphere extends React.Component {
    static propTypes = {
        height: PropTypes.number,
        width: PropTypes.number
    }

    render() {
        const {height, width} = this.props;
        return (
            <Entity>
                <RenderShape 
                    type="ground"
                    width={width}
                    height={height}

                />
                {this.props.children}
            </Entity>
        );
    }
}

export default Sphere;