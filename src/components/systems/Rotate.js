import {PropTypes} from "react";
import Babylon from "babylonjs";
import AbstractSystemComponent from "../AbstractSystemComponent";
import {hasEntity, getEntity} from "../../classes/Helpers";

class Rotate extends AbstractSystemComponent {
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

    componentWillUpdate(nextProps, nextState, nextContext) {
        if (this.propsChanged(nextProps)){
            this.updateRotation(nextProps, nextContext);
        }
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
