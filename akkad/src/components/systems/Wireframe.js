import {PropTypes} from "react";
import AbstractSystemComponent from "../AbstractSystemComponent";

class Wireframe extends AbstractSystemComponent {
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
