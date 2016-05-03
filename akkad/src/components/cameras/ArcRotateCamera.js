import React, {PropTypes} from "react";
import {RenderCamera} from "../systems";
import Entity from "../Entity";

class ArcRotateCamera extends React.Component {
    static propTypes = {
        target: PropTypes.arrayOf(PropTypes.number).isRequired,
        position: PropTypes.arrayOf(PropTypes.number),
        initialPosition: PropTypes.arrayOf(PropTypes.number)
    }

    static contextTypes = {
        appState: PropTypes.object,
        actions: PropTypes.object
    }

    componentDidMount() {
        if (this.props.initialPosition) {
            console.warn(`<ArcRotateCamera />: initialPosition prop is deprecated, please use "position" instead`);
        }
    }

    render() {
        const {target, position} = this.props;
        return (
            <Entity>
                <RenderCamera
                    type="arcRotate"
                    target={target}
                    position={position}
                />
            </Entity>
        );
    }
}

export default ArcRotateCamera;
