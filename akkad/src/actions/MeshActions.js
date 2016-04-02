import {SceneLoader} from "babylonjs";
import Immutable from "immutable";

const importMesh = (path, fileName, scene, progressCallback = () => {}) => {

    return new Promise((resolve, reject) => {
        SceneLoader.ImportMesh(
            "",
            path,
            fileName,
            scene,
            resolve,
            progressCallback,
            reject
        );
    });
};

const MeshActions = {
    async importMesh(state, actions, path, fileName, sceneID, entityID) {
        const scene = state().getIn(["entities", sceneID, "entity"]);
        const meshes = await importMesh(path, fileName, scene);
        let newState = state();

        meshes.forEach(mesh => {
            const meshObj = Immutable.Map({
                id: entityID,
                entity: mesh,
                type: "mesh"
            });

            newState = newState.setIn(["entities", entityID], meshObj);
        });


        return newState;
    }
};

export default MeshActions;
