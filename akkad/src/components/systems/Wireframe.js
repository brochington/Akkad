import {PropTypes} from "react";
import AkkadAbstractComponent from "../AkkadAbstractComponent";

class Wireframe extends AkkadAbstractComponent {
    static contextTypes = {
        entityID: PropTypes.string,
        appState: PropTypes.object,
        actions: PropTypes.object
    }

    shouldComponentUpdate() {
        return false;
    }

    entityHasWireframe = (val) => {
        const {appState, entityID} = this.context;

        const material = appState.getIn(["entities", entityID, "entity"]);
        material.wireframe = val;
    }

    componentWillMount() {
        this.entityHasWireframe(true);
    }

    componentWillUnmount() {
        this.entityHasWireframe(false);
    }
}

export default Wireframe;