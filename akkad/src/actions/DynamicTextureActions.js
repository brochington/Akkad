import Immutable from 'immutable';
import Babylon from "babylonjs";
import {getEntity} from '../classes/Helpers';

const dynamicTextureActions = {
    createDynamicTexture(state, actions, entityID, sceneID) {
        const scene = getEntity(state(), sceneID);
        const options = 512; // Not really sure what this does...
        const dynamicTexture = new Babylon.DynamicTexture(entityID, options, scene, true);

        const dynamicTextureObj = Immutable.Map({
            id: entityID,
            entity: dynamicTexture,
            type: "dynamicTexture"
        });

        return state().setIn(["entities", entityID], dynamicTextureObj);
    }
}

export default dynamicTextureActions;
