import Babylon from "babylonjs";

export default {
    setLight(state, actions, config) {
        const scene = state.get("scene");

        const light = new Babylon.HemisphericLight("light1", new Babylon.Vector3(0, 1, 0), scene);

        return state.set("light", light);
    }
};