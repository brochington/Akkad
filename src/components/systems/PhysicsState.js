import {PropTypes} from "react";
// import Immutable from 'immutable';
import AbstractSystemComponent from "../AbstractSystemComponent";
// import {hasEntity} from "../../classes/Helpers";

class PhysicsState extends AbstractSystemComponent {
    static contextTypes = {
        entityID: PropTypes.string,
        appState: PropTypes.object,
        actions: PropTypes.object
    };

    static propTypes = {
        mass: PropTypes.number,
        friction: PropTypes.number,
        restitution: PropTypes.number
    };

    componentDidMount() {
        const {actions, entityID} = this.context;
        actions._internal.setPhysicsState(entityID, this.props);
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        if (this.propsChanged(nextProps)){
            const {actions, entityID} = nextContext;
            actions._internal.setPhysicsState(entityID, nextProps);
        }
    }
}

export default PhysicsState;
