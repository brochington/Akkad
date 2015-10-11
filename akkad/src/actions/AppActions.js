import Babylon from "babylonjs";

export default {
    setCanvas(state, actions, canvas) {
        console.log("setCanvas");
        return state.set("canvas", canvas);
    },

    setEngine(state, actions) {
        const canvas = state.get("canvas");
        console.log("setEngine", canvas);

        return state.set("engine", new Babylon.Engine(canvas, true));
    },

    setCamera(state, actions, config) {
        const {name} = config;

        const scene = state.get("scene");

        const camera = new Babylon.FreeCamera(name, new Babylon.Vector3(0, 5, -10), scene);

        return state.set("camera", camera);

    }
};