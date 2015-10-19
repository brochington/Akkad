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
    async importMesh(state, actions, path, fileName, entityID) {
        const scene = state.getIn(["entities", state.get("sceneID"), "entity"]);

        const meshes = await importMesh(path, fileName, scene);

        meshes.forEach(mesh => {
            const meshObj = Immutable.Map({
                id: entityID,
                entity: mesh,
                type: "mesh"
            });

            state = state.setIn(["entities", entityID], meshObj);
        });

        return state;
    }
};

export default MeshActions;