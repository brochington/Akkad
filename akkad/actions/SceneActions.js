import Babylon from "babylonjs";

export default {
	setScene(state, actions) {
		const engine = state.get("engine");

		return state.set("scene", new Babylon.Scene(engine));
	},

	disposeScene(state, actions) {
		const scene = state.get("scene");

		scene.dispose();

		state = state.delete("scene");

		return state;
	},

	startRenderLoop(state, actions) {
		const engine = state.get("engine");
		const scene = state.get("scene");

		engine.runRenderLoop(function(){
		    scene.render();
		});

		return state;
	}
};