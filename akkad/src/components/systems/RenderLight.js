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

    componentWillMount() {
        const {actions, entityID} = this.context;
        const {createLight} = actions._internal;

        createLight(entityID, this.props);
    }
}

export default RenderLight;
