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
        if (!fileName) {
            fileName = path.split('/').pop();
            path = path.slice(0, path.lastIndexOf('/')) + '/';
        }

        const scene = state().getIn(["entities", sceneID, "entity"]);
        const meshes = await importMesh(path, fileName, scene);
        console.log('meshes!', meshes);
        let newState = state();

        meshes.forEach((mesh, i) => {
            const meshObj = Immutable.Map({
                id: `${entityID}-${i}`,
                entity: mesh,
                type: "mesh",
                parentMesh: entityID
            });

            newState = newState.setIn(["entities", `${entityID}-${i}`], meshObj);
        });


        return newState;
    },

    destroyMesh(state, actions, entityID) {

        state()
            .get('entities')
            .filter(m => m.get('parentMesh', null) === entityID)
            .forEach(m => m.get('entity').dispose());

        return state().update('entities', e => e.filter(m => m.get('parentMesh', null) !== entityID));
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
