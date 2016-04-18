import {PropTypes} from "react";
import AbstractSystemComponent from "../AbstractSystemComponent";

class RenderCamera extends AbstractSystemComponent {
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
