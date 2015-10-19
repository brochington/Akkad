import {PropTypes} from "react";
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

    componentWillUpdate(nextState, nextProps) {
        const {entityID, appState, actions} = this.context;
        const {createLight} = actions._internal;
        const props = {
            ...this.props,
            ...nextProps
        };
        
        if (!appState.hasIn(["lights", entityID])) {
            createLight(entityID, props);
        }
    }
}

export default RenderLight;
