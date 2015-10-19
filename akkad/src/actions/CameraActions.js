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
            alpha = 1,
            beta = 1,
            radius = 10
        } = config;

        const target = new Babylon.Vector3(...config.target);

        return new Babylon.ArcRotateCamera(entityID, alpha, beta, radius, target, scene);
    }
};

export default {
    setCamera(state, actions, entityID, config) {
        const canvas = state.get("canvas");
        const scene = state.getIn(["entities", state.get("sceneID"), "entity"]);

        const camera = cameraCreators[config.type](entityID, config, scene);

        camera.attachControl(canvas, false);

        const cameraObj = Immutable.Map({
            id: entityID,
            entity: camera,
            type: "camera"
        });

        return state.setIn(["entities", entityID], cameraObj);
    }
};