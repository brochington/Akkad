import React, {PropTypes} from "react";
import AkkadAbstractComponent from "../AkkadAbstractComponent";
import Babylon from "babylonjs";

class Position extends AkkadAbstractComponent {
    static propTypes = {
        vector: PropTypes.arrayOf(PropTypes.number)
    }

    static contextTypes = {
        entityID: PropTypes.string,
        appState: PropTypes.object,
        actions: PropTypes.object
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        const {entityID, appState} = nextContext;

        const newVector = nextProps.vector;
        const oldVector = this.props.vector;
            
            for (let axis in newVector) {
                if (newVector[axis] !== oldVector[axis]) {
                    return true;
                }
            }

        return false;
    }

    componentWillMount() {
        const {appState, entityID} = this.context;
        const entity = appState.getIn(["entities", entityID, "entity"]);
        const {vector} = this.props;
        entity.position = new Babylon.Vector3(...vector);
    }
}

export default Position;
