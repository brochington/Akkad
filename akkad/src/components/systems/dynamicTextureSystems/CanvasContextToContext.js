import React, {PropTypes} from "react";
import AbstractSystemComponent from "../../AbstractSystemComponent";
import {hasEntity, getEntity} from "../../../classes/Helpers";

class CanvasContextToContext extends AbstractSystemComponent {
    // static contextTypes = {
    //     entityID: PropTypes.string,
    //     appState: PropTypes.
    // }

    static childContextTypes = {
        canvasContext: PropTypes.object
    }

    getChildContext() {
        const {appState, entityID} = this.context;
        // console.log('getChildContext...', this.context);
        const dynamicTexture = getEntity(appState, entityID);
        // console.log('dynamicTexture...', dynamicTexture._context);

        return {
            canvasContext: dynamicTexture._context
        };
    }

    // componentWillMount() {
    //     console.log('componentWillMount...');
    // }

    render() {
        // console.log('render...');
        const {children} = this.props;
        // const {entityID} = this.context;
        console.log(this.context);

        return (
            <div>
                {children}
            </div>
        );
    }
}

export default CanvasContextToContext;
