import React, {PropTypes} from "react";
import AbstractSystemComponent from "../../AbstractSystemComponent";
import {getEntity} from "../../../classes/Helpers";

class FillRect extends AbstractSystemComponent {
    static contextTypes = {
        appState: React.PropTypes.object,
        actions: React.PropTypes.object,
        entityID: React.PropTypes.string,
        canvasContext: PropTypes.object
    }

    updateDynamicTexture = (context) => {
        const {canvasContext, appState, entityID} = context;
        const dynamicTexture = getEntity(appState, entityID);
        canvasContext.fillRect(0, 0, 400, 400);

        dynamicTexture.update();
    }

    componentWillMount() {
        this.updateDynamicTexture(this.context);
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        this.updateDynamicTexture(nextContext);
    }
}

export default FillRect;
