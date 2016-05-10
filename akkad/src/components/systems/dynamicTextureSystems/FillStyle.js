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

    updateDynamicTexture = (context) => {
        const {canvasContext, appState, entityID} = context;
        const dynamicTexture = getEntity(appState, entityID);
        canvasContext.fillStyle = this.props.color;
        console.time('update');
        dynamicTexture.update();
        console.timeEnd('update');
    }

    componentWillMount() {
        this.updateDynamicTexture(this.context);
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        this.updateDynamicTexture(nextContext);
    }
}

export default FillStyle;
