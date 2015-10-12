import React, {PropTypes} from "react";
import AkkadAbstractComponent from "../AkkadAbstractComponent";

class Gravity extends AkkadAbstractComponent {
	static contextTypes = {
		entityID: PropTypes.string,
		appState: PropTypes.object, 
		actions: PropTypes.object,
	}
	componentDidMount() {
		console.log("Gravity did mount", this.context);
	}
}

export default Gravity;