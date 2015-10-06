import Babylon from "babylonjs";
import {MeshManager} from "../classes";

const meshManager = new MeshManager();

export default {
    updateMesh(state, actions, meshObj) {
        return state.updateIn(["meshes", meshObj.id], mesh => meshObj);
    },

    createSphere(state, actions, config) {
        const scene = state.get("scene");
        const {id, props} = config;
        const {segments, diameter} = props;

        const sphere = new Babylon.Mesh.CreateSphere(id, segments, diameter, scene, true);

        meshManager.updateMeshFromProps(sphere, props);

        state = actions.updateMesh({
            id,
            mesh: sphere
        });
        
        return state;
    },

    updateSphere(state, actions, config) {
        const {props, id} = config;
        const {mesh} = state.getIn(["meshes",id ]);
        
        meshManager.updateMeshFromProps(mesh, props);

        return null;
    },

    createGround(state, actions, config) {
        const scene = state.get("scene");
        const {id} = config;
        const ground = new Babylon.Mesh.CreateGround(id, 6, 6, 2, scene);

        state = actions.updateMesh({
            id,
            mesh: ground
        });

        return state;
    }
}