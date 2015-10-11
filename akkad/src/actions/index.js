import appActions from "./appActions";
import cameraActions from "./CameraActions";
import lightActions from "./LightActions";
import meshActions from "./MeshActions";
import sceneActions from "./SceneActions";
import shapeActions from "./ShapeActions";
import meshTriggerActions from "./MeshTriggerActions";

export default {
    ...appActions,
    ...cameraActions,
    ...lightActions,
    ...meshActions,
    ...sceneActions,
    ...shapeActions,
    ...meshTriggerActions
};