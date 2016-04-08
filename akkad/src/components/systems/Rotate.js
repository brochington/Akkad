import {PropTypes} from "react";
import Babylon from "babylonjs";
import AkkadAbstractComponent from "../AkkadAbstractComponent";
import {hasEntity, getEntity} from "../../classes/Helpers";

class Rotate extends AkkadAbstractComponent {
    static propTypes = {
        axis: PropTypes.arrayOf(PropTypes.number).isRequired,
        amount: PropTypes.number.isRequired,
        space: PropTypes.string.isRequired
    }

    static contextTypes = {
        entityID: PropTypes.string,
        appState: PropTypes.object,
        actions: PropTypes.object
    }

    updateRotation = (props, context) => {
        const {entityID, appState} = context;
        const {amount} = props;
        const axis = new Babylon.Vector3(...props.axis);
        const space = Babylon.Space[props.space];

        if (hasEntity(appState, entityID)) {
            getEntity(appState, entityID).rotate(axis, amount, space);
        }
    }

    shouldComponentUpdate(nextProps) {
        const {axis, amount, space} = nextProps;

        for (let i in axis) {
            if (axis[i] !== this.props.axis[i]) {
                return true;
            }
        }

        if (amount !== this.props.amount || space !== this.props.space) {
            return true;
        }

        return false;
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        this.updateRotation(nextProps, nextContext);
    }

    componentWillMount() {
        this.updateRotation(this.props, this.context);
    }

    componentWillUnmount() {
        this.updateRotation({
            axis: [0, 0, 0],
            amount: 0,
            space: "LOCAL"
        }, this.context);
    }
}

export default Rotate;
