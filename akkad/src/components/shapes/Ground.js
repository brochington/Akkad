import React, {PropTypes} from "react";
import Entity from "../Entity";
import EntityLoaded from "../EntityLoaded";
import {RenderShape} from "../systems";

class Ground extends React.Component {
    static propTypes = {
        height: PropTypes.number,
        width: PropTypes.number
    }

    render() {
        const {height = 6, width = 6, subdivisions = 2, children} = this.props;

        return (
            <Entity>
                <RenderShape
                    type="ground"
                    width={width}
                    height={height}
                    subdivisions={subdivisions}
                />
                <EntityLoaded>
                    {children}
                </EntityLoaded>
            </Entity>
        );
    }
}

export default Ground;
