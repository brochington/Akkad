import {PropTypes} from "react";
import AbstractSystemComponent from "../AbstractSystemComponent";

class CollisionsEnabled extends AbstractSystemComponent {
    static contextTypes = {
        entityID: PropTypes.string,
        appState: PropTypes.object,
        actions: PropTypes.object
    }

    shouldComponentUpdate() {
        return false;
    }

    componentWillMount() {
        const {appState, entityID} = this.context;
        const entity = appState.getIn(["entities", entityID, "entity"]);

        entity.collisionsEnabled = true;
    }

    componentWillUnmount() {
        const {appState, entityID} = this.context;
        const entity = appState.getIn(["entities", entityID, "entity"]);

        entity.collisionsEnabled = false;
    }
}

export default CollisionsEnabled;
