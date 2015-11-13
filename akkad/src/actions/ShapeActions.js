import {Mesh} from "babylonjs";
import Immutable from "immutable";
import {Helpers} from "../classes";

/*
TODO: In Babylon 2.3 all shape contructors will take an options object. 
      Will need to convert some of these shape methods.
*/
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

    groundFromHeightMap(scene, entityID, options) {
        const {
            heightMap, 
            meshWidth,
            meshHeight,
            subdivisions = 250, 
            minHeight,
            maxHeight
        } = options;

        return new Promise(resolve => {
            return new Mesh.CreateGroundFromHeightMap(
                entityID, 
                heightMap,
                meshWidth, 
                meshHeight,
                subdivisions,
                minHeight,
                maxHeight, 
                scene, 
                true, // updatable
                resolve
            );
        });        
    },

    disc(scene, entityID, options) {
        const {
            radius, 
            tessellation,
            updatable = true,
            sideOrientation = null
        } = options;

        const disc = new Mesh.CreateDisc(entityID, radius, tessellation, scene, updatable, sideOrientation);
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
    },

    lines(scene, entityID, options) {
        const {vectors} = options;

        return new Mesh.CreateLines(entityID, vectors, scene);
    },

    dashedLines(scene, entityID, options) {
        const {vectors, dashSize, gapSize, dashNumber} = options;

        return new Mesh.CreateDashedLines(entityID, vectors, dashSize, gapSize, dashNumber, scene);
    }
};

const ShapeActions = {
    async createShape(state, actions, sceneID, entityID, props) {
        const {type} = props;

        if (type && shapeCreators[type]) {
            const scene = state.getIn(["entities", sceneID, "entity"]);
            const options = Helpers.convertShapeProps(props);
            let shape = shapeCreators[type](scene, entityID, options);

            if(shape instanceof Promise) {
                shape = await shape;
            }

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