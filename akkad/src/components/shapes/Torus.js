import React, {PropTypes} from "react";
import Entity from "../Entity";
import EntityLoaded from "../EntityLoaded";
import {RenderShape} from "../systems";

class Torus extends React.Component {
    static contextTypes = {
        appState: PropTypes.object,
        actions: PropTypes.object
    };

    static propTypes = {
        diameter: PropTypes.number,
        thickness: PropTypes.number,
        tessellation: PropTypes.number,
        updatable: PropTypes.bool,
        sideOrientation: PropTypes.number
    };

    render() {
        const {
            diameter,
            thickness,
            tessellation,
            updatable,
            sideOrientation,
            children
        } = this.props;

        return (
            <Entity>
                <RenderShape
                    type="torus"
                    diameter={diameter}
                    thickness={thickness}
                    tessellation={tessellation}
                    updatable={updatable}
                    sideOrientation={sideOrientation}
                />
                <EntityLoaded>
                    {children}
                </EntityLoaded>
            </Entity>
        );
    }
}

export default Torus;
