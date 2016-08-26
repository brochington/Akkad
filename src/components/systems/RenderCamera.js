import {PropTypes} from "react";
import AbstractSystemComponent from "../AbstractSystemComponent";

class RenderCamera extends AbstractSystemComponent {
    static propTypes = {
        target: PropTypes.array,
        type: PropTypes.string.isRequired,
        position: PropTypes.arrayOf(PropTypes.number)
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
        setCamera(sceneID, entityID, {...this.props, initialPosition: this.props.position});
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        if (this.propsChanged(nextProps)){
            // update the camera position here. Maybe add support for animations?
            const {actions, entityID} = nextContext;

            actions._internal.updateCameraPosition(entityID, nextProps.position);
        }
    }

    //TODO: Add a componentWillUnmount() to detach camera.
}

export default RenderCamera;
