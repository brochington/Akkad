import React, {PropTypes} from "react";
import AkkadAbstractComponent from "../AkkadAbstractComponent";
import {Helpers} from "../../classes";

class RotateMesh extends AkkadAbstractComponent {
    static propTypes = {
        axis: PropTypes.array.isRequired,
        amount: PropTypes.number.isRequired,
        space: PropTypes.string.isRequired
    }

    static contextTypes = {
        entityID: PropTypes.string,
        appState: PropTypes.object,
        actions: PropTypes.object
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        const {entityID, appState} = nextContext;

        if(appState && appState.has("scene") && appState.hasIn(["meshes", entityID])) {
            const {mesh} = appState.getIn(["meshes", entityID]);

            const options = Helpers.convertShapeProps(nextProps);
            const {axis, amount, space} = options;

            mesh.rotate(axis, amount, space);
        }
    }
}

export default RotateMesh;
