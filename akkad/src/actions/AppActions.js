import Babylon from "babylonjs";

export default {
    setEngine(state, actions, canvas) {
        state = state.set("canvas", canvas);
        state = state.set("engine", new Babylon.Engine(canvas, true));
        return state;
    },

    setCamera(state, actions, config) {
        const {name} = config;

        const scene = state.get("scene");

        const camera = new Babylon.FreeCamera(name, new Babylon.Vector3(0, 5, -10), scene);

        return state.set("camera", camera);

    }
};