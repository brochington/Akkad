import React from "react";
import AkkadAbstractComponent from "../AkkadAbstractComponent";
import {RenderCamera} from "../systems";
import Entity from "../Entity";
import EntityLoaded from "../EntityLoaded";

const {PropTypes} = React;

class FreeCamera extends AkkadAbstractComponent {
    static propTypes = {
        position: PropTypes.arrayOf(PropTypes.number).isRequired,
        target: PropTypes.arrayOf(PropTypes.number).isRequired,
        initialPosition: PropTypes.arrayOf(PropTypes.number)
    }

    static contextTypes = {
        appState: PropTypes.object,
        actions: PropTypes.object
    }

    componentDidMount() {
        if (this.props.initialPosition) {
            console.warn(`<FreeCamera />: initialPosition prop is deprecated, please use "position" instead`);
        }
    }

    render() {
        const {target, position, children} = this.props;

        return (
            <Entity>
                <RenderCamera
                    type="free"
                    target={target}
                    position={position}
                />
                <EntityLoaded>
                    {children}
                </EntityLoaded>
            </Entity>
        );
    }
}

export default FreeCamera;
