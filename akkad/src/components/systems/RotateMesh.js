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

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        const {entityID, appState} = nextContext;

        return appState.hasIn(["meshes", entityID]);
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        const {entityID, appState} = nextContext;

        const mesh = appState.getIn(["meshes", entityID, "mesh"]);

        const options = Helpers.convertShapeProps(nextProps);
        const {axis, amount, space} = options;

        if (
            axis !== this.props.axis ||
            amount !== this.props.amount ||
            space !== this.props.space
        ) {
            mesh.rotate(axis, amount, space);
        }
    }
}

export default RotateMesh;
