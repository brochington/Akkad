import React, {PropTypes} from "react";
import Entity from "../Entity";
import EntityLoaded from "../EntityLoaded";
import {RenderShape} from "../systems";

class Cylinder extends React.Component {
    static contextTypes = {
        appState: PropTypes.object,
        actions: PropTypes.object
    };

    static propTypes = {
        height: PropTypes.number,
        diameterTop: PropTypes.number,
        diameterBottom: PropTypes.number,
        tessellation: PropTypes.number,
        subdivisions: PropTypes.any
    };

    render() {
        const {
            height,
            diameterTop,
            diameterBottom,
            tessellation,
            subdivisions,
            children
        } = this.props;

        return (
            <Entity>
                <RenderShape
                    type="cylinder"
                    heigh={height}
                    diameterTop={diameterTop}
                    diameterBottom={diameterBottom}
                    tessellation={tessellation}
                    subdivisions={subdivisions}
                />
                <EntityLoaded>
                    {children}
                </EntityLoaded>
            </Entity>
        );
    }
}

export default Cylinder;
