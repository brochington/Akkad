import React, {PropTypes} from "react";
import AbstractSystemComponent from "../../AbstractSystemComponent";
import {getEntity} from "../../../classes/Helpers";

/**
* A class that renders markup in a DynamicTexture.
*/
class RasterizeMarkup extends AbstractSystemComponent {
    static contextTypes = {
        appState: React.PropTypes.object,
        actions: React.PropTypes.object,
        entityID: React.PropTypes.string,
        canvasContext: PropTypes.object
    }
    updateDynamicTexture = (props, context) => {
        console.log('updateDynamicTexture!!!!');
        const {canvasContext, appState, entityID} = context;
        const dynamicTexture = getEntity(appState, entityID);

        const data = `
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
            <foreignObject width="100%" height="100%" requiredExtensions="http://www.w3.org/1999/xhtml">
                <div requiredExtensions="http://www.w3.org/1999/xhtml" style="height: 200px; width: 200px; background-color: blue; color: red;">Getting this working...</div>
            </foreignObject>
        </svg>`;
        const DOMURL = window.URL || window.webkitURL || window;
        const img = new Image();
        const svg = new Blob([data], {type: 'image/svg+xml;charset=utf-8'});
        const url = DOMURL.createObjectURL(svg);
        console.log('url origin', url);

        img.crossOrigin = "Anonymous";

        img.onload = function() {
            console.log('in onload.');
            canvasContext.fillStyle = 'blue';
            canvasContext.fillRect(0, 0, 300, 300);

            // canvasContext.fillStyle = "#fff";
            canvasContext.drawImage(img, 0, 0);
            DOMURL.revokeObjectURL(url);
            dynamicTexture.update();
            console.log(canvasContext);


        };

        console.dir(img);

        img.src = url;
    }

    componentWillMount() {
        console.log('RasterizeMarkup');
        this.updateDynamicTexture(this.props, this.context);
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        this.updateDynamicTexture(nextProps, nextContext);
    }
}

export default RasterizeMarkup;
