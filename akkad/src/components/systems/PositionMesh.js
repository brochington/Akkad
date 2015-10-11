import React, {PropTypes} from "react";
import AkkadAbstractComponent from "../AkkadAbstractComponent";
import {Helpers} from "../../classes";

class PositionMesh extends AkkadAbstractComponent {
    static propTypes = {
        x: PropTypes.number,
        y: PropTypes.number,
        z: PropTypes.number
    }

    static contextTypes = {
        entityID: PropTypes.string,
        appState: PropTypes.object,
        actions: PropTypes.object
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        const {entityID, appState} = nextContext;

        return appState.hasIn(["meshes", entityID]);
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        const {entityID, appState} = nextContext;

        const mesh = appState.getIn(["meshes", entityID, "mesh"]);

        const options = Helpers.convertShapeProps(nextProps);

        for (let option in options) {
            if (
                mesh.position.hasOwnProperty(option) && 
                mesh.position[option] !== options[option]
            ) {
                mesh.position[option] = options[option];
            }
        }
    }
}

export default PositionMesh;
