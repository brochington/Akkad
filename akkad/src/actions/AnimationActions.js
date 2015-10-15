import Babylon from "babylonjs";
import Immutable from "immutable";

const valueTypeMap = {
    float: Babylon.Animation.ANIMATIONTYPE_FLOAT,
    vector2: Babylon.Animation.ANIMATIONTYPE_VECTOR2,
    vector3: Babylon.Animation.ANIMATIONTYPE_VECTOR3,
    quaternion: Babylon.Animation.ANIMATIONTYPE_QUATERNION,
    matrix: Babylon.Animation.ANIMATIONTYPE_MATRIX,
    color: Babylon.Animation.ANIMATIONTYPE_COLOR3
};

const loopModeMap = {
    relative: Babylon.Animation.ANIMATIONLOOPMODE_RELATIVE,
    cycle: Babylon.Animation.ANIMATIONLOOPMODE_CYCLE,
    constant: Babylon.Animation.ANIMATIONLOOPMODE_CONSTANT
};

const AnimationActions = {
    createAnimation(state, actions, config) {
        const scene = state.getIn(["entities", state.get("sceneID"), "entity"]);
        const {entityID, meshProperty, valueType, loopMode, fps = 30} = config;

        const animation = new Babylon.Animation(
            entityID, // name
            meshProperty, // property type to animate
            fps, // fps
            valueTypeMap[valueType], // value type of animation
            loopModeMap[loopMode] // loop mode
        );

        const animationObj = Immutable.Map({
            id: entityID,
            entity: animation,
            type: "animation"
        });

        return state.setIn(["entities", entityID], animationObj);
    }
}

export default AnimationActions;