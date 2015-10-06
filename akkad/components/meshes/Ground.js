import React from "react";
import AbstractMesh from "./AbstractMesh";
import Babylon from "babylonjs";

class Ground extends AbstractMesh {
	componentWillUpdate(nextState, nextProps, nextContext) {
		const {appState, actions} = nextContext;

		if (appState && appState.has("scene") && !appState.hasIn(["meshes", this.id])) {
			actions.createGround({
				id: this.id
			})
		}
	}	
}

export default Ground;