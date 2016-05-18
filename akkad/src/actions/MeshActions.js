import {SceneLoader, SubMesh} from "babylonjs";
import Immutable from "immutable";
import {getEntity} from "../classes/Helpers";

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
    },

    createSubMesh(state, actions, meshID, entityID) {
        const mesh = getEntity(state(), meshID);
        // const subMesh = getEntity(state(), entityID);
        const subMesh = new SubMesh(2, 0, 24, 0, 24, mesh);

        // console.log('creating a submesh....', verticesCount, subMesh);
        if (!Array.isArray(mesh.subMeshes)) {
            mesh.subMeshes = [];
        }

        const subMeshObj = Immutable.Map({
            id: entityID,
            targetEntityID: meshID,
            entity: subMesh,
            type: "subMesh"
        });
        mesh.subMeshes.push(subMesh);
        return state().setIn(["entities", entityID], subMeshObj);


    }
};

export default MeshActions;
