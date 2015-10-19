import {PropTypes} from "react";
import AkkadAbstractComponent from "../AkkadAbstractComponent";

class CheckCollisions extends AkkadAbstractComponent {
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
        
        entity.checkCollisions = true;
    }

    componentWillUnmount() {
        const {appState, entityID} = this.context;
        const entity = appState.getIn(["entities", entityID, "entity"]);
        
        entity.checkCollisions = false;   
    }
}

export default CheckCollisions;
