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

    createSubMesh(state, actions, meshID, entityID, options) {
        const mesh = getEntity(state(), meshID);
        const {
            materialIndex,
            verticesStart,
            indexStart,
            indexCount
        } = options;

        // filter out all default submeshes if declaring your own.
        mesh.subMeshes = mesh.subMeshes.filter(sm => sm._isAkkadSubMesh);

        const subMesh = new SubMesh(
            materialIndex,
            verticesStart,
            mesh.getTotalVertices(),
            indexStart,
            indexCount,
            mesh
        );
        // Used to flad submeshes made by akkad
        subMesh._isAkkadSubMesh = true;

        const subMeshObj = Immutable.Map({
            id: entityID,
            targetEntityID: meshID,
            entity: subMesh,
            type: "subMesh"
        });

        return state().setIn(["entities", entityID], subMeshObj);
    }
};

export default MeshActions;
