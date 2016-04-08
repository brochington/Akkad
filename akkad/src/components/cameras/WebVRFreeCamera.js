import React from "react";
import AkkadAbstractComponent from "../AkkadAbstractComponent";
import {RenderCamera} from "../systems";
import Entity from "../Entity";
import EntityLoaded from "../EntityLoaded";

const {PropTypes} = React;

class WebVRFreeCamera extends AkkadAbstractComponent {
    static propTypes = {
        initialPosition: PropTypes.arrayOf(PropTypes.number).isRequired,
        target: PropTypes.arrayOf(PropTypes.number).isRequired
    }

    static contextTypes = {
        appState: PropTypes.object,
        actions: PropTypes.object
    }

    render() {
        const {target, initialPosition, children} = this.props;

        return (
            <Entity>
                <RenderCamera
                    type="webVRFree"
                    target={target}
                    initialPosition={initialPosition}
                />
                <EntityLoaded>
                    {children}
                </EntityLoaded>
            </Entity>
        );
    }
}

export default WebVRFreeCamera;
