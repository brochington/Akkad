import Babylon, {ActionManager, ExecuteCodeAction} from "babylonjs";

const MeshTriggerActions = {
    createMeshTriggers(state, actions, entityID, triggers) {
        const mesh = state.getIn(["entities", entityID, "entity"]);

        if (!mesh.actionManager) {
            const scene = state.getIn(["entities", state.get("sceneID"), "entity"]);
            mesh.actionManager = new ActionManager(scene);
        }

        state = state.updateIn(["meshes", entityID], meshObj => meshObj.set("triggers", triggers));

        return state;
    },
    updateMeshTriggers(state, actions, entityID, updatedTriggers) {
        return state.setIn(["meshes", entityID, "triggers"], updatedTriggers);
    }
}

export default MeshTriggerActions;