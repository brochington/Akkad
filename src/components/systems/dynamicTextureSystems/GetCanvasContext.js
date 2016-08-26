import {PropTypes} from "react";
import AbstractSystemComponent from "../../AbstractSystemComponent";
import {getEntity} from "../../../classes/Helpers";

class GetCanvasContext extends AbstractSystemComponent {
    static contextTypes = {
        entityID: PropTypes.string,
        appState: PropTypes.object,
        actions: PropTypes.object
    }

    static propTypes = {
        callback: PropTypes.func
    }

    static defaultProps = {
        callback: () => {}
    }

    componentWillMount() {
        const {appState, entityID} = this.context;
        const dynamicTexture = getEntity(appState, entityID);
        this.props.callback(dynamicTexture._context);
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        const {appState, entityID} = nextContext;
        const dynamicTexture = getEntity(appState, entityID);
        dynamicTexture.update();
    }
}

export default GetCanvasContext;
