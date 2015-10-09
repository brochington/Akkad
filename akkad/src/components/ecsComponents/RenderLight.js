import React, {PropTypes} from "react";
import AkkadAbstractComponent from "../AkkadAbstractComponent";

class RenderLight extends AkkadAbstractComponent {
    static propTypes = {
        type: PropTypes.string
    }

	static contextTypes = {
		entityID: PropTypes.string,
		actions: PropTypes.object.isRequired,
		appState: PropTypes.object.isRequired
	}

	componentWillUpdate(nextState, nextProps, nextContext) {
        const {entityID, appState, actions: {createLight}} = this.context;
        const props = {
            ...this.props,
            ...nextProps
        };
        
        if (appState && appState.has("scene") && !appState.hasIn(["lights", entityID])) {
            createLight(entityID, props);
        }
    }
}

export default RenderLight;
