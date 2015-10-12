import React, {PropTypes} from "react";
import Babylon from "babylonjs";
import AkkadAbstractComponent from "../AkkadAbstractComponent";

class Texture extends AkkadAbstractComponent {
	static contextTypes = {
		meshID: PropTypes.string,
		entityID: PropTypes.string,
		appState: PropTypes.object, 
		actions: PropTypes.object,
	}

	static propTypes = {
		image: PropTypes.string.isRequired
	}

	shouldComponentUpdate(nextProps, nextState, nextContext) {
		return false
	}

	componentWillMount() {
		const {appState, meshID} = this.context;
		const {image} = this.props;
		const scene = appState.get("scene");

        const material = appState.getIn(["meshes", meshID, "material"]);

        material.diffuseTexture = new Babylon.Texture(image, scene);

    }

    componentWillUnmount() {
    	const {appState, meshID} = this.context;

        const material = appState.getIn(["meshes", meshID, "material"]);
        material.diffuseTexture = null;
    }
}

export default Texture;