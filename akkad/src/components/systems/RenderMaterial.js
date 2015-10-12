import React, {PropTypes} from "react";
import AkkadAbstractComponent from "../AkkadAbstractComponent";

class RenderMaterial extends AkkadAbstractComponent {
	static contextTypes = {
		meshID: PropTypes.string,
		entityID: PropTypes.string,
		appState: PropTypes.object, 
		actions: PropTypes.object,
	}

	componentWillMount() {
		const {appState, actions, meshID, entityID} = this.context;
		const {createMaterial} = actions._internal;

		createMaterial(meshID, entityID);
    }
}

export default RenderMaterial;