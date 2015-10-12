import Babylon from "babylonjs";
import Immutable from "immutable";
import {MeshManager, Helpers} from "../classes";

const shapeCreators = {
    box(scene, entityID, props) {
        const options = Helpers.convertShapeProps(props);

        return new Babylon.Mesh.CreateBox(entityID, options, scene);
    },
    sphere(scene, entityID, props) {
        const options = Helpers.convertShapeProps(props);

        return new Babylon.Mesh.CreateSphere(entityID, options, scene);
    },
    ground(scene, entityID, props) {
        const options = Helpers.convertShapeProps(props);
        
        
        const ground = new Babylon.Mesh.CreateGround(entityID, options, scene);
        
        ground.checkCollisions = true;

        return ground;
    }
}

const ShapeActions = {
    createShape(state, actions, entityID, props) {
        const {type} = props;

        if (type && shapeCreators[type]) {
            const scene = state.getIn(["entities", state.get("sceneID"), "entity"]);
            const shape = shapeCreators[type](scene, entityID, props);

            const meshObj = Immutable.Map({
                id: entityID,
                mesh: shape
            });

            state = state.setIn(["meshes", entityID], meshObj);
        }
        return state;
    }
}

export default ShapeActions;