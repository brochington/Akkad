import {MeshBuilder} from "babylonjs";
import Immutable from "immutable";
import {convertShapeProps, hasEntity, getEntity} from "../classes/Helpers";

const shapeCreators = {
    Box: (scene, entityID, options) => new MeshBuilder.CreateBox(entityID, options, scene),
    Sphere: (scene, entityID, options) => new MeshBuilder.CreateSphere(entityID, options, scene),
    IcoSphere: (scene, entityID, options) => new MeshBuilder.CreateIcoSphere(entityID, options, scene),
    Ribbon: (scene, entityID, options) => new MeshBuilder.CreateRibbon(entityID, options, scene),
    Cylinder: (scene, entityID, options) => new MeshBuilder.CreateCylinder(entityID, options, scene),
    Torus: (scene, entityID, options) => new MeshBuilder.CreateTorus(entityID, options, scene),
    TorusKnot: (scene, entityID, options) => new MeshBuilder.CreateTorusKnot(entityID, options, scene),
    LineSystem: (scene, entityID, options) => new MeshBuilder.CreateLineSystem(entityID, options, scene),
    Lines: (scene, entityID, options) => new MeshBuilder.CreateLines(entityID, options, scene),
    DashedLines: (scene, entityID, options) => new MeshBuilder.CreateDashedLines(entityID, options, scene),
    Lathe: (scene, entityID, options) => new MeshBuilder.CreateLathe(entityID, options, scene),
    Ground: (scene, entityID, options) => new MeshBuilder.CreateGround(entityID, options, scene),
    TiledGround: (scene, entityID, options) => new MeshBuilder.CreateTiledGround(entityID, options, scene),
    Tube: (scene, entityID, options) => new MeshBuilder.CreateTube(entityID, options, scene),
    Polyhedron: (scene, entityID, options) => new MeshBuilder.CreatePolyhedron(entityID, options, scene),
    GroundFromHeightMap: (scene, entityID, options) => {
        return new MeshBuilder.CreateGroundFromHeightMap(entityID, options.heightMap, options, scene);
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

            const shape = shapeCreators[type](scene, entityID, options, () => {/*action callback goes here.*/});

            const meshObj = Immutable.Map({
                id: entityID,
                entity: shape,
                type: "mesh",
                shape: type.toLowerCase()
            });

            return state().setIn(["entities", entityID], meshObj);
        }

        return null;
    },

    updateShape(state, actions, entityID, props) {
        const {type} = props;

        if (type && shapeUpdaters[type] && hasEntity(state(), entityID)) {
            const shape = getEntity(state(), entityID);
            shapeUpdaters[type](shape, props);
        }

        return state();
    },

    destroyShape(state, actions, entityID) {
        if (hasEntity(state(), entityID)) {
            getEntity(state(), entityID).dispose();
        }

        return state().deleteIn(["entities", entityID]);
    }
};

export default ShapeActions;
