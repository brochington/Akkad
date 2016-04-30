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
        const {gravity, targets} = this.props;

        actions._internal.enablePhysicsOnScene(sceneID, gravity, targets);

    }
}

export default Physics;
