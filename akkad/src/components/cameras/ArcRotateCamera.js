import React, {PropTypes} from "react";
import {RenderCamera} from "../systems";
import Entity from "../Entity";

class ArcRotateCamera extends React.Component {
    static propTypes = {
        target: PropTypes.arrayOf(PropTypes.number).isRequired
    }

    static contextTypes = {
        appState: PropTypes.object,
        actions: PropTypes.object
    }

    render() {
        const {target} = this.props;
        return (
            <Entity>
                <RenderCamera 
                    type="arcRotate"
                    target={target}
                />
            </Entity>
        );
    }
}

export default ArcRotateCamera;