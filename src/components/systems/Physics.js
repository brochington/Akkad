import {PropTypes} from "react";
import AbstractSystemComponent from "../AbstractSystemComponent";

class Physics extends AbstractSystemComponent {
    static contextTypes = {
        entityID: PropTypes.string,
        appState: PropTypes.object,
        actions: PropTypes.object
    };

    static propTypes = {
        gravity: PropTypes.arrayOf(PropTypes.number).isRequired, // Vector3
        targets: PropTypes.string
    };

    componentWillMount() {
        const {entityID: sceneID, actions} = this.context;
        const {gravity} = this.props;

        actions._internal.enablePhysicsOnScene(sceneID, gravity);

    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        if (this.propsChanged(nextProps)){
            const {entityID: sceneID, actions} = nextContext;
            const {gravity} = nextProps;
            // this.setPhysicsState(nextProps, nextContext);
            // actions._internal.setPhysicsState(entityID, nextProps);
            actions._internal.enablePhysicsOnScene(sceneID, gravity);
        }
    }
}

export default Physics;
