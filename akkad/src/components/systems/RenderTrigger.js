import React, {PropTypes} from "react";
import AkkadAbstractComponent from "../AkkadAbstractComponent";

class RenderTrigger extends AkkadAbstractComponent {
    static contextTypes = {
        entityID: PropTypes.string,
        appState: PropTypes.object, 
        actions: PropTypes.object,
    }

    static propTypes = {
        targetEntityID: PropTypes.string.isRequired,
        triggers: PropTypes.object
    }

    componentDidMount() {
        const {targetEntityID, triggers} = this.props;
        const {actions, entityID} = this.context;
        const {createTriggers} = actions._internal;

        createTriggers(targetEntityID, entityID, triggers);
    }

}

export default RenderTrigger;