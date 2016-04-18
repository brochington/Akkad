import {PropTypes} from "react";
import AbstractSystemComponent from "../AbstractSystemComponent";
import Babylon from "babylonjs";

class Position extends AbstractSystemComponent {
    static propTypes = {
        vector: PropTypes.arrayOf(PropTypes.number)
    }

    static contextTypes = {
        entityID: PropTypes.string,
        appState: PropTypes.object,
        actions: PropTypes.object
    }

    updatePosition = (props, context) => {
        const {appState, entityID} = context;
        const {vector} = props;
        const entity = appState.getIn(["entities", entityID, "entity"]);

        entity.position = new Babylon.Vector3(...vector);
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

    componentWillUpdate(nextProps, nextState, nextContext) {
        this.updatePosition(nextProps, nextContext);
    }

    componentWillMount() {
        this.updatePosition(this.props, this.context);
    }
}

export default Position;
