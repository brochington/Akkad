import {StandardMaterial, MultiMaterial} from "babylonjs";
import Immutable from "immutable";
import {getEntity} from "../classes/Helpers";

const MaterialActions = {
    createMaterial(state, actions, sceneID, entityID) {
        const scene = state().getIn(["entities", sceneID, "entity"]);

        const material = new StandardMaterial(entityID, scene);

        const materialObj = Immutable.Map({
            id: entityID,
            entity: material,
            type: "material"
        });

        return state().setIn(["entities", entityID], materialObj);
    },

    createMultiMaterial(state, actions, entityID, sceneID) {
        const scene = getEntity(state(), sceneID);

        const multiMaterial = new MultiMaterial(entityID, scene);

        const multiMaterialObj = Immutable.Map({
            id: entityID,
            entity: multiMaterial,
            type: "multiMaterial"
        });

        return state().setIn(['entities', entityID], multiMaterialObj);
    }
};

export default MaterialActions;
