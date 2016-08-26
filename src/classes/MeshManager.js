import Immutable from "immutable";
import Babylon from "babylonjs";

const propHandlers = {
    position(mesh, vector) {
        mesh.position = new Babylon.Vector3(...vector);
    },

    rotation(mesh, vector) {
        mesh.rotation = new Babylon.Vector3(...vector);
    },

    rotationQuaternion(mesh, quaternion) {
        mesh.rotationQuaternion = new Babylon.Quaternion(...quaternion);
    },

    scaling(mesh, vector) {
        mesh.scaling = new Babylon.Vector3(...vector);
    },

    visibility(mesh, visibility) {
        mesh.visibility = visibility;
    },

    isVisible(mesh, isVisible) {
        mesh.isVisible = isVisible;
    },

    outlineColor(mesh, color) {
        mesh.outlineColor = new Babylon.Color3(...color);
    }
};


class MeshManager {
    updateMeshFromProps(mesh, props) {
        Immutable.Map(props)
                    .filter((val, name) => !!propHandlers[name])
                    .forEach((val, name) => propHandlers[name](mesh, val));
    }
}

export default MeshManager;