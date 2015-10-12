import React, {PropTypes} from "react";
import AkkadAbstractComponent from "../AkkadAbstractComponent";

class RenderCamera extends AkkadAbstractComponent {
    static propTypes = {
        target: PropTypes.array,
        type: PropTypes.string.isRequired
    }

    static contextTypes = {
        entityID: PropTypes.string,
        appState: PropTypes.object,
        actions: PropTypes.object
    }

    componentWillMount() {
        const {actions, appState, entityID} = this.context;
        const {setCamera} = actions._internal;

        setCamera(entityID, this.props);
    }
    
    //TODO: Add a componentWillUnmount() to detach camera.
}

export default RenderCamera;