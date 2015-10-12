import React, {PropTypes} from "react";
import AkkadAbstractComponent from "../AkkadAbstractComponent";
import Babylon from "babylonjs";

class Gravity extends AkkadAbstractComponent {
    static contextTypes = {
        entityID: PropTypes.string,
        appState: PropTypes.object, 
        actions: PropTypes.object,
    }

    static propTypes = {
        vector: PropTypes.arrayOf(PropTypes.number).isRequired
    }

    shouldComponentUpdate(nextProps) {
        const newVector = nextProps.vector;
        const oldVector = this.props.vector;
        
        for (let axis in newVector) {
            if (newVector[axis] !== oldVector[axis]) {
                return true;
            }
        }

        return false;
    }

    componentDidMount() {
        const {appState, entityID} = this.context;
        const entity = appState.getIn(["entities", entityID, "entity"]);
        const {vector} = this.props;

        entity.gravity = new Babylon.Vector3(...vector);
    }

    componentWillUnmount() {
        const entity = appState.getIn(["entities", entityID, "entity"]);

        entity.gravity = null;
    }
}

export default Gravity;