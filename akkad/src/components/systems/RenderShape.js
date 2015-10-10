import React, {PropTypes} from "react";
import AkkadAbstractComponent from "../AkkadAbstractComponent";

class RenderShape extends AkkadAbstractComponent {
    static contextTypes = {
        entityID: PropTypes.string,
        actions: PropTypes.object.isRequired,
        appState: PropTypes.object.isRequired
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        const {entityID, appState, actions} = this.context;
        const {createShape} = actions._internal;

        if(appState && appState.has("scene")) {
            if (!appState.hasIn(["meshes", entityID])) {

                createShape(entityID, nextProps);
            } else {
                // nothing yet...
            }
        }
    }
}

export default RenderShape;
