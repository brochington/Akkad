import {Mesh} from "babylonjs";
import Immutable from "immutable";
import {convertShapeProps} from "../classes/Helpers";

const shapeCreators = {
    box(scene, entityID, options) {
        const {size} = options;
        return new Mesh.CreateBox(entityID, size, scene);
    },

    sphere(scene, entityID, options) {
        const {segments, diameter} = options;
        return new Mesh.CreateSphere(entityID, segments, diameter, scene);
    },

    ground(scene, entityID, options) {
        const {width, height, subdivisions} = options;
        return new Mesh.CreateGround(entityID, width, height, subdivisions, scene);
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
                type: "mesh"
            });

            return state().setIn(["entities", entityID], meshObj);
        }

        return state();
    }
};

export default ShapeActions;
