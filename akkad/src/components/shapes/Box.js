import React, {PropTypes} from "react";
import Entity from "../Entity";
import EntityLoaded from "../EntityLoaded";
import {RenderShape} from "../systems";
import AkkadAbstractComponent from '../AkkadAbstractComponent';

/** Class representing a Box */
class Box extends AkkadAbstractComponent {
    /**
    * contextTypes
    *
    */
    static contextTypes = {
        appState: PropTypes.object,
        actions: PropTypes.object
    }

    static propTypes = {
        height: PropTypes.number,
        width: PropTypes.number
    }
    /**
    * @return {function} the render function output
    */
    render() {
        const {
            size = 1,
            children
        } = this.props;

        return (
            <Entity>
                <RenderShape
                    type="box"
                    size={size}
                />
                <EntityLoaded>
                    {children}
                </EntityLoaded>
            </Entity>
        );
    }
}

export default Box;
