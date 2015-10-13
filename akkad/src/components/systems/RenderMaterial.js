import React, {PropTypes} from "react";
import AkkadAbstractComponent from "../AkkadAbstractComponent";

class RenderMaterial extends AkkadAbstractComponent {
	static contextTypes = {
		entityID: PropTypes.string,
		appState: PropTypes.object, 
		actions: PropTypes.object,
	}

	componentWillMount() {
		const {actions, entityID} = this.context;
		const {createMaterial} = actions._internal;

		createMaterial(entityID);
    }
}

export default RenderMaterial;