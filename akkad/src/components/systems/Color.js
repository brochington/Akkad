import {PropTypes} from "react";
import Babylon from "babylonjs";
import AkkadAbstractComponent from "../AkkadAbstractComponent";

class Color extends AkkadAbstractComponent {
    static contextTypes = {
        entityID: PropTypes.string,
        appState: PropTypes.object,
        actions: PropTypes.object
    }

    static propTypes = {
        color: PropTypes.arrayOf(PropTypes.number),
        type: PropTypes.string
    }

    componentDidMount() {
        const {appState, entityID} = this.context;
        const {color, type} = this.props;

        const entityObj = appState.getIn(["entities", entityID]);
        const entity = entityObj.get("entity");

        const color3 = new Babylon.Color3(...color);

        switch(type) {
        case "ambient":
            entity.ambientColor = color3;
            break;
        case "specular":
            entity.specularColor = color3;
            break;
        default: // diffuse by default
            entity.diffuseColor = color3;
            break;
        }
    }

    componentWillUnmount() {
        const {appState, entityID} = this.context;

        const entity = appState.getIn(["entities", entityID, "entity"]);

        // For now, set all colors to null.
        entity.ambientColor = null;
        entity.specularColor = null;
        entity.diffuseColor = null;
    }
}

export default Color;