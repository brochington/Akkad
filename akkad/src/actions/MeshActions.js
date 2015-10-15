import Babylon, {SceneLoader} from "babylonjs";
import Immutable from "immutable";

const MeshActions = {
	importMesh(state, actions, meshLocation, entityID) {
		console.log("at importMesh", meshLocation.split("/"));
		console.log(location.origin + meshLocation);
		const scene = state.getIn(["entities", state.get("sceneID"), "entity"]);

		SceneLoader.ImportMesh(entityID, location.href + "static/", meshLocation.split("/")[2], scene, (newMeshes, particleSystems) => {
			console.log("mesh loaded!!", newMeshes);
		});

		return state;
	}
}

export default MeshActions;