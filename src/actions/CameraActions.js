import Babylon from "babylonjs";
import Immutable from "immutable";
import {hasEntity, getEntity} from '../classes/Helpers';

const cameraCreators = {
    free(entityID, config, scene) {
        const position = new Babylon.Vector3(...config.position);

        const camera = new Babylon.FreeCamera(entityID, position, scene);

        if(config.target) {
            const target = new Babylon.Vector3(...config.target);
            camera.setTarget(target);
        }

        return camera;
    },

    arcRotate(entityID, config, scene) {
        const {
            alpha = 0,
            beta = 0,
            radius = 0,
            position
        } = config;

        const target = new Babylon.Vector3(...config.target);

        const camera = new Babylon.ArcRotateCamera(entityID, alpha, beta, radius, target, scene);

        if (position) {
            camera.setPosition(new Babylon.Vector3(...position));
        }

        return camera;
    },

    webVRFree(entityID, config, scene) {
        const position = new Babylon.Vector3(...config.position);

        const camera = new Babylon.WebVRFreeCamera(entityID, position, scene);

        if(config.target) {
            const target = new Babylon.Vector3(...config.target);
            camera.setTarget(target);
        }

        return camera;
    }
};

export default {
    setCamera(state, actions, sceneID, entityID, config) {
        const canvas = state().getIn(["entities", `canvas-${sceneID}`, "entity"]);
        const scene = state().getIn(["entities", sceneID, "entity"]);

        const camera = cameraCreators[config.type](entityID, config, scene);

        camera.attachControl(canvas, false);

        const cameraObj = Immutable.Map({
            id: entityID,
            entity: camera,
            type: "camera"
        });

        return state().setIn(["entities", entityID], cameraObj);
    },

    updateCameraPosition(state, actions, cameraID, position) {
        if (hasEntity(state(), cameraID)) {
            const camera = getEntity(state(), cameraID);

            camera.setPosition(new Babylon.Vector3(...position));
        }

        return state();
    }
};
