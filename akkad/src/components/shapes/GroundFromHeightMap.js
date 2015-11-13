import React, {PropTypes} from "react";
import Entity from "../Entity";
import EntityLoaded from "../EntityLoaded";
import {RenderShape} from "../systems";

class Ground extends React.Component {
    static propTypes = {
        meshHeight: PropTypes.number,
        meshWidth: PropTypes.number,
        heightMap: PropTypes.string,
        subdivisions: PropTypes.number,
        minHeight: PropTypes.number,
        maxHeight: PropTypes.number
    }

    render() {
        const {
            meshHeight,
            meshWidth,
            heightMap,
            subdivisions,
            minHeight,
            maxHeight,
            children
        } = this.props;

        return (
            <Entity>
                <RenderShape 
                    type="groundFromHeightMap"
                    meshHeight={meshHeight}
                    meshWidth={meshWidth}
                    subdivisions={subdivisions}
                    minHeight={minHeight}
                    maxHeight={maxHeight}
                    heightMap={heightMap}
                />
                <EntityLoaded>
                    {children}
                </EntityLoaded>
            </Entity>
        );
    }
}

export default Ground;