import React, {PropTypes} from "react";
import Babylon from "babylonjs";
import AkkadAbstractComponent from "../AkkadAbstractComponent";

/* Pushes a value to a property on a specific entity */
class AnimateMesh extends AkkadAbstractComponent {
	static contextTypes = {
		entityID: PropTypes.string.isRequired,
		appState: PropTypes.object, 
		actions: PropTypes.object,
	}

	static propTypes = {
		targetEntityID: PropTypes.string,
		propertyName: PropTypes.string,
		keyFrames: PropTypes.array
	}

	componentDidMount() {
		const {entityID, appState} = this.context;
		const {targetEntityID, propertyName, keyFrames} = this.props;

		const targetMesh = appState.getIn(["entities", targetEntityID, "entity"]);
		const scene = appState.getIn(["entities", appState.get("sceneID"), "entity"]);
		const animation = appState.getIn(["entities", entityID, "entity"]);

		animation.setKeys(keyFrames);

		targetMesh.animations.push(animation);

		scene.beginAnimation(targetMesh, 0, 100, true);
	}

	componentWillUnmount() {
		// TODO: remove and dispose of animation when component is unmounted.
	}
}

export default AnimateMesh;