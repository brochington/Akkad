import React, {PropTypes} from "react";
import Entity from "../Entity";
import EntityLoaded from "../EntityLoaded";
import {RenderShape} from "../systems";

class Disc extends React.Component {
    static contextTypes = {
        appState: PropTypes.object,
        actions: PropTypes.object
    };

    static propTypes = {
        radius: PropTypes.number,
        tessellation: PropTypes.number,
        sideOrientation: PropTypes.number
    };

    render() {
        const {
            radius = 10,
            tessellation = 0,
            sideOrientation = null,
            children
        } = this.props;

        return (
            <Entity>
                <RenderShape
                    type="disc"
                    radius={radius}
                    tessellation={tessellation}
                    sideOrientation={sideOrientation}
                />
                <EntityLoaded>
                    {children}
                </EntityLoaded>
            </Entity>
        );
    }
}

export default Disc;
