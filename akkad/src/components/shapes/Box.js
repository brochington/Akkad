import React, {PropTypes} from "react";
import Entity from "../Entity";
import EntityLoaded from "../EntityLoaded";
import {RenderShape} from "../systems";

class Box extends React.Component {
    static contextTypes = {
        appState: PropTypes.object,
        actions: PropTypes.object
    }

    static propTypes = {
        height: PropTypes.number,
        width: PropTypes.number
    }

    render() {
        const {
            height = 1,
            width = 1,
            children
        } = this.props;

        return (
            <Entity>
                <RenderShape 
                    type="box"
                    height={height}
                    width={width}
                />
                <EntityLoaded>
                    {children}
                </EntityLoaded>
            </Entity>
        );
    }
}

export default Box;