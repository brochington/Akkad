import {PropTypes} from "react";
import AkkadAbstractComponent from "../AkkadAbstractComponent";

class ApplyGravity extends AkkadAbstractComponent {
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
        
        entity.applyGravity = true;
    }

    componentWillUnmount() {
        const {appState, entityID} = this.context;
        const entity = appState.getIn(["entities", entityID, "entity"]);
        
        entity.applyGravity = false;   
    }
}

export default ApplyGravity;
