import {PropTypes} from "react";
import Babylon from "babylonjs";
import AbstractSystemComponent from "../AbstractSystemComponent";
import {hasEntity, getEntity} from "../../classes/Helpers";

class Rotation extends AbstractSystemComponent {
    static propTypes = {
        x: PropTypes.number,
        y: PropTypes.number,
        z: PropTypes.number
    }

    static defaultProps = {
        x: 0,
        y: 0,
        z: 0
    }

    static contextTypes = {
        entityID: PropTypes.string,
        appState: PropTypes.object,
        actions: PropTypes.object
    }

    updateRotation = (axis, context) => {
        const {entityID, appState} = context;

        if (hasEntity(appState, entityID)) {
            getEntity(appState, entityID).rotation = new Babylon.Vector3(...axis);
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
        this.updateRotation({x: 0, y: 0, z: 0}, this.context);
    }
}

export default Rotation;
