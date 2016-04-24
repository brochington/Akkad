import React, {PropTypes} from "react";
import Entity from "../Entity";
import EntityLoaded from "../EntityLoaded";
import {RenderShape} from "../systems";
import AkkadAbstractComponent from '../AkkadAbstractComponent';

/**
* Adds a Box to the Scene
* @extends AkkadAbstractComponent
*/
class Box extends AkkadAbstractComponent {
    /**
    * @name contextTypes
    * @property {object} contextTypes
    * @property {object} contextTypes.appState
    * @property {object} contextTypes.actions
    */
    static contextTypes = {
        appState: PropTypes.object,
        actions: PropTypes.object
    };

    static propTypes = {
        height: PropTypes.number,
        width: PropTypes.number
    };

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
