import Babylon from "babylonjs";
import Immutable from "immutable";

const MaterialActions = {
    createMaterial(state, actions, sceneID, entityID) {
        const scene = state().getIn(["entities", sceneID, "entity"]);

        const material = new Babylon.StandardMaterial(entityID, scene);

        const materialObj = Immutable.Map({
            id: entityID,
            entity: material,
            type: "material"
        });

        return state().setIn(["entities", entityID], materialObj);
    }
};

export default MaterialActions;
