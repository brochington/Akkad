import React, {PropTypes} from "react";
import {RenderCamera} from "../systems";
import Entity from "../Entity";

class ArcRotateCamera extends React.Component {
    static propTypes = {
        target: PropTypes.arrayOf(PropTypes.number).isRequired,
        initialPosition: PropTypes.arrayOf(PropTypes.number),
    }

    static contextTypes = {
        appState: PropTypes.object,
        actions: PropTypes.object
    }

    render() {
        const {target, initialPosition} = this.props;
        return (
            <Entity>
                <RenderCamera 
                    type="arcRotate"
                    target={target}
                    initialPosition={initialPosition}
                />
            </Entity>
        );
    }
}

export default ArcRotateCamera;