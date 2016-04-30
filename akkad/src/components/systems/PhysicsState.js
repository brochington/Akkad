import {PropTypes} from "react";
import Immutable from 'immutable';
import {PhysicsEngine} from "babylonjs";
import AbstractSystemComponent from "../AbstractSystemComponent";
import {hasEntity} from "../../classes/Helpers";

const shapeImposters = {
    box: (opts = {mass: 4, friction: 0.1, restitution: 0.999}) => [PhysicsEngine.BoxImpostor, opts],
    sphere: (opts = {mass: 4}) => [PhysicsEngine.SphereImpostor, opts],
    ground: (opts = {mass: 0, restitution: 0.001, friction: 0.1}) => [PhysicsEngine.BoxImpostor, opts]
};

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

    setPhysicsState = (props, context) => {
        const {entityID, appState} = context;

        if (hasEntity(appState, entityID)) {
            const entityObj = appState.getIn(['entities', entityID], Immutable.Map());
            const shapeType = entityObj.get('shape', null);

            if (shapeType && shapeImposters[shapeType]) {
                entityObj.get('entity').setPhysicsState(...shapeImposters[shapeType](props));
            }
        }
    }

    componentDidMount() {
        this.setPhysicsState(this.props, this.context);
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        if (this.propsChanged(nextProps)){
            this.setPhysicsState(nextProps, nextContext);
        }
    }
}

export default PhysicsState;
