import {PropTypes} from "react";
import AbstractSystemComponent from "../AbstractSystemComponent";

class RenderTrigger extends AbstractSystemComponent {
    static contextTypes = {
        sceneID: PropTypes.string.isRequired,
        entityID: PropTypes.string,
        appState: PropTypes.object,
        actions: PropTypes.object
    }

    static propTypes = {
        targetEntityID: PropTypes.string.isRequired,
        triggers: PropTypes.object
    }

    componentDidMount() {
        const {targetEntityID, triggers} = this.props;
        const {sceneID, actions, entityID} = this.context;
        const {createTriggers} = actions._internal;

        createTriggers(sceneID, targetEntityID, entityID, triggers);
    }

    componentWillUnmount() {
        const {targetEntityID} = this.props;
        const {actions} = this.context;
        const {disposeTriggers} = actions._internal;

        disposeTriggers(targetEntityID);
    }
}

export default RenderTrigger;
