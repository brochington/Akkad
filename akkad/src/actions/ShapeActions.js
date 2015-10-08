import Babylon from "babylonjs";
import {MeshManager} from "../classes";

const meshManager = new MeshManager();

/* converts prop values to Babylon accepted values */
const convertShapeProps = (props) => {
    let newProps = {};

    for (let prop in props) {
        let val = props[prop];
        newProps[prop] = shapePropTransforms[prop] ? shapePropTransforms[prop](val) : val;
    }

    return newProps;
}

/* */
const shapePropTransforms = {
    faceColors: (color4Array) => new Babylon.Color4(...color4Array),
    faceUV: (vector4Array) => new Babylon.Vector4(...vector4Array)
}

const shapeCreators = {
    box(scene, entityID, props) {
        const options = convertShapeProps(props);

        return new Babylon.Mesh.CreateBox(entityID, options, scene);
    },
    sphere(scene, entityID, props) {
        const options = convertShapeProps(props);

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