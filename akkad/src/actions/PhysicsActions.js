import Immutable from "immutable";
import {hasEntity, getEntity} from '../classes/Helpers';
import Babylon from "babylonjs";
// Importing here to make a global var, as needed by Babylon.
import Oimo from '../../lib/Oimo'; //eslint-disable-line
import {PhysicsEngine} from "babylonjs";

const shapeImposters = {
    box: (opts = {mass: 4, friction: 0.1, restitution: 0.999}) => [PhysicsEngine.BoxImpostor, opts],
    sphere: (opts = {mass: 4}) => [PhysicsEngine.SphereImpostor, opts],
    ground: (opts = {mass: 0, restitution: 0.001, friction: 0.1}) => [PhysicsEngine.BoxImpostor, opts]
};

const physicsActions = {
    enablePhysicsOnScene(state, actions, sceneID, gravity) {
        if (hasEntity(state(), sceneID)) {
            const scene = getEntity(state(), sceneID);
            window.BABYLON = Babylon;

            scene.enablePhysics(new Babylon.Vector3(...gravity));

            return state().updateIn(['entities', sceneID], s => s.set('physicsEnabled', true));
        }

        return state();
    },

    setPhysicsState(state, actions, entityID, opts) {
        if (hasEntity(state(), entityID)) {
            const entityObj = state().getIn(['entities', entityID], Immutable.Map());
            const shapeType = entityObj.get('shape', null);

            if (shapeType && shapeImposters[shapeType]) {
                entityObj.get('entity').setPhysicsState(...shapeImposters[shapeType](opts));
            }
        }

        return state();
    }
};

export default physicsActions;
