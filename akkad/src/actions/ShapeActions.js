import Babylon from "babylonjs";
import {MeshManager, Helpers} from "../classes";

const shapeCreators = {
    box(scene, entityID, props) {
        const options = Helpers.convertShapeProps(props);

        return new Babylon.Mesh.CreateBox(entityID, options, scene);
    },
    sphere(scene, entityID, props) {
        const options = Helpers.convertShapeProps(props);

        return new Babylon.Mesh.CreateSphere(entityID, options, scene);
    }
}

const ShapeActions = {
    createShape(state, actions, entityID, props) {
        const {type} = props;

        if (type && shapeCreators[type] && !state.hasIn(["meshes", entityID])) {
            const scene = state.get("scene");
            const shape = shapeCreators[type](scene, entityID, props);

            state = actions.updateMesh({
                id: entityID,
                mesh: shape
            });
        }
        return state;
    },

    updateMesh(state, actions, meshObj) {
        return state.updateIn(["meshes", meshObj.id], mesh => meshObj);
    }
}

export default ShapeActions;