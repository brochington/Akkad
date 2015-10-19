import Babylon from "babylonjs";

export default {
    setCanvas(state, actions, canvas) {
        return state.set("canvas", canvas);
    },

    setEngine(state) {
        const canvas = state.get("canvas");

        return state.set("engine", new Babylon.Engine(canvas, true));
    }
};