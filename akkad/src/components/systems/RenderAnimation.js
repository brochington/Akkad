import React, {PropTypes} from "react";
import AkkadAbstractComponent from "../AkkadAbstractComponent";

class RenderAnimation extends AkkadAbstractComponent {
    static contextTypes = {
        entityID: PropTypes.string,
        appState: PropTypes.object, 
        actions: PropTypes.object,
    }

    componentWillMount() {
        const {actions, entityID} = this.context;
        const {createAnimation} = actions._internal;

        console.log("entityID", entityID);

        const config = {
            ...this.props,
            entityID
        };

        createAnimation(config);
    }
}

export default RenderAnimation;