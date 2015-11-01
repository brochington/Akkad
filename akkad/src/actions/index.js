import appActions from "./appActions";
import cameraActions from "./CameraActions";
import lightActions from "./LightActions";
import sceneActions from "./SceneActions";
import shapeActions from "./ShapeActions";
import materialActions from "./MaterialActions";
import animationActions from "./AnimationActions";
import triggerActions from "./TriggerActions";
import meshActions from "./MeshActions";
import particlesActions from "./ParticlesActions";

export default {
    ...appActions,
    ...cameraActions,
    ...lightActions,
    ...sceneActions,
    ...shapeActions,
    ...materialActions,
    ...animationActions,
    ...triggerActions,
    ...meshActions,
    ...particlesActions
};