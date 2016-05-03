import {Mesh} from "babylonjs";
import Immutable from "immutable";
import {convertShapeProps, hasEntity, getEntity} from "../classes/Helpers";

const shapeCreators = {
    box(scene, entityID, options) {
        const {size, updatable} = options;
        console.log("updatable", updatable);
        return new Mesh.CreateBox(entityID, size, scene, updatable);
    },

    sphere(scene, entityID, options) {
        const {segments, diameter, updatable} = options;
        return new Mesh.CreateSphere(entityID, segments, diameter, scene, updatable);
    },

    ground(scene, entityID, options) {
        const {width, height, subdivisions, updatable} = options;
        return new Mesh.CreateGround(entityID, width, height, subdivisions, scene, updatable);
    },

    groundFromHeightMap(scene, entityID, options, callback) {
        const {
            heightMap,
            meshWidth,
            meshHeight,
            subdivisions = 250,
            minHeight,
            maxHeight
        } = options;

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
            callback
        );
    },

    disc(scene, entityID, options) {
        const {
            radius,
            tessellation,
            updatable = true,
            sideOrientation = null
        } = options;

        return new Mesh.CreateDisc(entityID, radius, tessellation, scene, updatable, sideOrientation);
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

const shapeUpdaters = {
    box(box, props) {
        // TODO: find out what property to update.
        console.log('props', props);
    }
};

const ShapeActions = {
    createShape(state, actions, sceneID, entityID, props) {
        const {type} = props;

        if (type && shapeCreators[type]) {
            const scene = state().getIn(["entities", sceneID, "entity"]);
            const options = convertShapeProps(props);
            let shape = shapeCreators[type](scene, entityID, options, () => {/*action callback goes here.*/});

            const meshObj = Immutable.Map({
                id: entityID,
                entity: shape,
                type: "mesh",
                shape: type
            });

            return state().setIn(["entities", entityID], meshObj);
        }

        return state();
    },

    updateShape(state, actions, entityID, props) {
        const {type} = props;

        if (type && shapeUpdaters[type] && hasEntity(state(), entityID)) {
            const shape = getEntity(state(), entityID);
            shapeUpdaters[type](shape, props);
        }

        return state();
    }
};

export default ShapeActions;
