import React, {PropTypes} from "react";
import AbstractSystemComponent from "../../AbstractSystemComponent";
import {getEntity} from "../../../classes/Helpers";

class FillStyle extends AbstractSystemComponent {
    static contextTypes = {
        appState: React.PropTypes.object,
        actions: React.PropTypes.object,
        entityID: React.PropTypes.string,
        canvasContext: PropTypes.object
    }

    updateDynamicTexture = (props, context) => {
        const {canvasContext, appState, entityID} = context;
        const dynamicTexture = getEntity(appState, entityID);
        canvasContext.fillStyle = props.color;

        dynamicTexture.update();
    }

    componentWillMount() {
        this.updateDynamicTexture(this.props, this.context);
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        this.updateDynamicTexture(nextProps, nextContext);
    }
}

export default FillStyle;
