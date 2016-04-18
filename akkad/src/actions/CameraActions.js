import Babylon from "babylonjs";
import Immutable from "immutable";

const cameraCreators = {
    free(entityID, config, scene) {
        const initialPosition = new Babylon.Vector3(...config.initialPosition);

        const camera = new Babylon.FreeCamera(entityID, initialPosition, scene);

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
            initialPosition
        } = config;

        const target = new Babylon.Vector3(...config.target);

        const camera = new Babylon.ArcRotateCamera(entityID, alpha, beta, radius, target, scene);

        if (initialPosition) {
            camera.setPosition(new Babylon.Vector3(...initialPosition));
        }

        return camera;
    },

    webVRFree(entityID, config, scene) {
        const initialPosition = new Babylon.Vector3(...config.initialPosition);

        const camera = new Babylon.WebVRFreeCamera(entityID, initialPosition, scene);

        if(config.target) {
            const target = new Babylon.Vector3(...config.target);
            camera.setTarget(target);
        }

        return camera;
    }
};

export default {
    setCamera: function* (state, actions, sceneID, entityID, config) {
        const canvas = state().getIn(["entities", `canvas-${sceneID}`, "entity"]);
        const scene = state().getIn(["entities", sceneID, "entity"]);

        const camera = cameraCreators[config.type](entityID, config, scene);

        camera.attachControl(canvas, false);

        const cameraObj = Immutable.Map({
            id: entityID,
            entity: camera,
            type: "camera"
        });
        console.log('set Camera!!');
        yield state().setIn(["entities", entityID], cameraObj);
    }
};
