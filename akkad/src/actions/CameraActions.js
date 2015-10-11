import Babylon from "babylonjs";

export default {
    setCamera(state, actions, config) {
    	console.log("setCamera!");
        const canvas = state.get("canvas");

        const scene = state.get("scene");

        const camera = new Babylon.FreeCamera("camera1", new Babylon.Vector3(0, 5, -10), scene);

        camera.setTarget(Babylon.Vector3.Zero());

        camera.attachControl(canvas, false);

        return state.set("camera", camera);
    }
};