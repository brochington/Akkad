import React, {PropTypes} from "react";
import Babylon from "babylonjs";
import AkkadAbstractComponent from "../AkkadAbstractComponent";

class MaterialAlpha extends AkkadAbstractComponent {
	static contextTypes = {
		meshID: PropTypes.string,
		entityID: PropTypes.string,
		appState: PropTypes.object, 
		actions: PropTypes.object,
	}

	static propTypes = {
		alpha: PropTypes.number.isRequired
	}

	updateMaterialAlpha = (alpha, context) => {
		const {appState, meshID} = context;

		const material = appState.getIn(["meshes", meshID, "material"]);

		material.alpha = alpha;
	}

	shouldComponentUpdate(nextProps, nextState, nextContext) {
		return nextProps.alpha !== this.props.alpha;
	}

	componentWillMount() {
		this.updateMaterialAlpha(this.props.alpha, this.context);
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
		this.updateMaterialAlpha(nextProps.alpha, nextContext);
    }

    componentWillUnmount() {
    	this.updateMaterialAlpha(null, nextContext);
    }
}

export default MaterialAlpha;