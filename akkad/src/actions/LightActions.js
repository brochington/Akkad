import Babylon from "babylonjs";
import Immutable from "immutable";

const lightCreators = {
    hemispheric(scene, entityID, props) {
        const {direction = [0, 1, 0]} = props;

        return new Babylon.HemisphericLight(
            entityID,
            new Babylon.Vector3(...direction),
            scene
        );
    },

    point(scene, entityID, props) {
        const {source = [1, 10, 1]} = props;

        return new Babylon.PointLight(entityID, new Babylon.Vector3(...source), scene);
    },

    spot(scene, entityID, props) {
        const {
            position = [0, 30, -10],
            direction = [0, -1, 0],
            angle = 0.8,
            exponent = 2
        } = props;

        const spotLight = new Babylon.SpotLight(
            entityID, 
            new Babylon.Vector3(...position),
            new Babylon.Vector3(...direction),
            angle,
            exponent,
            scene
        );

        return spotLight;
    },

    directional(scene, entityID, props) {
        const {direction = [0, -1, 0]} = props;

        return new Babylon.DirectionalLight(entityID, new Babylon.Vector3(...direction), scene);
    }
};

export default {
    createLight(state, actions, sceneID, entityID, props) {
        const {type} = props;
        const scene = state.getIn(["entities", sceneID, "entity"]);
        const light = lightCreators[type](scene, entityID, props);

        const lightObj = Immutable.Map({
            id: entityID,
            entity: light,
            type: "light"
        });

        return state.setIn(["entities", entityID], lightObj);
    }
};