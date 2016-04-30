// import Immutable from "immutable";
import {hasEntity, getEntity} from '../classes/Helpers';
import Babylon from "babylonjs";
// Importing here to make a global var, as needed by Babylon.
import Oimo from '../../lib/Oimo'; //eslint-disable-line

const physicsActions = {
    enablePhysicsOnScene(state, actions, sceneID, gravity) {
        if (hasEntity(state(), sceneID)) {
            const scene = getEntity(state(), sceneID);
            window.BABYLON = Babylon;

            scene.enablePhysics(new Babylon.Vector3(...gravity));

            return state().updateIn(['entities', sceneID], s => s.set('physicsEnabled', true));
        }

        return state();
    }
};

export default physicsActions;
