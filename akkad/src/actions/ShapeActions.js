import {Mesh} from "babylonjs";
import Immutable from "immutable";
import {Helpers} from "../classes";

const shapeCreators = {
    box(scene, entityID, options) {
        return new Mesh.CreateBox(entityID, options, scene);
    },

    sphere(scene, entityID, options) {
        return new Mesh.CreateSphere(entityID, options, scene);
    },

    ground(scene, entityID, options) {
        return new Mesh.CreateGround(entityID, options, scene);
    },

    disc(scene, entityID, options) {
        const {
            radius, 
            tessellation,
            updatable = true,
            sideOrientation = null
        } = options;

        const disc = new Mesh.CreateDisc(entityID, radius, tessellation, scene, updatable, sideOrientation);
        console.log(disc);
        return disc;

    },

    cylinder(scene, entityID, options) {
        const {
            height = 1,
            diameterTop = 1,
            diameterBottom = 1,
            tessellation = 30,
            subdivisions = 6,
            updatable = true
        } = options;

        return new Mesh.CreateCylinder(
            entityID,
            height,
            diameterTop,
            diameterBottom, 
            tessellation,
            subdivisions,
            scene,
            updatable
        );
    },

    torus(scene, entityID, options) {
        const {
            diameter = 1,
            thickness = 1,
            tessellation = 10,
            updatable = true,
            sideOrientation = 0
        } = options;

        return new Mesh.CreateTorus(entityID, diameter, thickness, tessellation, scene, updatable, sideOrientation);
    }
};

const ShapeActions = {
    createShape(state, actions, sceneID, entityID, props) {
        const {type} = props;

        if (type && shapeCreators[type]) {
            const scene = state.getIn(["entities", sceneID, "entity"]);
            const options = Helpers.convertShapeProps(props);
            const shape = shapeCreators[type](scene, entityID, options);

            const meshObj = Immutable.Map({
                id: entityID,
                entity: shape,
                type: "mesh"
            });
            
            state = state.setIn(["entities", entityID], meshObj);
        }
        return state;
    }
};

export default ShapeActions;