import {PropTypes} from "react";
import AkkadAbstractComponent from "../AkkadAbstractComponent";

class RenderCamera extends AkkadAbstractComponent {
    static propTypes = {
        target: PropTypes.array,
        type: PropTypes.string.isRequired
    }

    static contextTypes = {
        sceneID: PropTypes.string.isRequired,
        entityID: PropTypes.string,
        appState: PropTypes.object,
        actions: PropTypes.object
    }

    componentWillMount() {
        const {actions, entityID, sceneID} = this.context;
        const {setCamera} = actions._internal;
        setCamera(sceneID, entityID, this.props);
    }
    
    //TODO: Add a componentWillUnmount() to detach camera.
}

export default RenderCamera;