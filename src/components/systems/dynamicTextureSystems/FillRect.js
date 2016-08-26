import {PropTypes} from "react";
import AbstractSystemComponent from "../../AbstractSystemComponent";
import {getEntity} from "../../../classes/Helpers";

class FillRect extends AbstractSystemComponent {
    static propTypes = {
        x: PropTypes.number,
        y: PropTypes.number,
        width: PropTypes.number,
        height: PropTypes.number
    }
    static contextTypes = {
        appState: PropTypes.object,
        actions: PropTypes.object,
        entityID: PropTypes.string,
        canvasContext: PropTypes.object
    }

    updateDynamicTexture = (props, context) => {
        const {canvasContext, appState, entityID} = context;
        const {x, y, width, height} = props;
        const dynamicTexture = getEntity(appState, entityID);
        canvasContext.fillRect(x, y, width, height);

        dynamicTexture.update();
    }

    componentWillMount() {
        this.updateDynamicTexture(this.props, this.context);
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        this.updateDynamicTexture(nextProps, nextContext);
    }
}

export default FillRect;
