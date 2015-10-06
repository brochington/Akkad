import React, {PropTypes} from "react";

class AbstractCamera extends React.Component {
	constructor() {
		super();
		this.id = Math.floor((1 + Math.random()) * 10000000000).toString();
	}
	
	static contextTypes = {
		appState: PropTypes.object,
		actions: PropTypes.object
	}

	render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
}

export default AbstractCamera;