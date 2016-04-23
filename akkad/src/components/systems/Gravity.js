import {PropTypes} from "react";
import AbstractSystemComponent from "../AbstractSystemComponent";
import Babylon from "babylonjs";

class Gravity extends AbstractSystemComponent {
    static contextTypes = {
        entityID: PropTypes.string,
        appState: PropTypes.object,
        actions: PropTypes.object
    }

    static propTypes = {
        vector: PropTypes.arrayOf(PropTypes.number).isRequired
    }

    updateGravity = (value, context) => {
        const {appState, entityID} = context;
        const entity = appState.getIn(["entities", entityID, "entity"]);

        entity.gravity = value;
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
        if (this.propsChanged(nextProps)){
            const val = new Babylon.Vector3(...nextProps.vector);
            this.updatePosition(val, nextContext);
        }
    }

    componentDidMount() {
        const {vector} = this.props;

        this.updateGravity(new Babylon.Vector3(...vector), this.context);
    }

    componentWillUnmount() {
        this.updateGravity(null, this.context);
    }
}

export default Gravity;
