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

    updateColor = (props, context) => {
        const {appState, entityID} = context;
        const {color, type} = props;

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

    shouldComponentUpdate(nextProps) {
        for (let i = 0, l = 2; i<=l; i++) {
            if (nextProps.color[i] !== this.props.color[i]) {
                return true;
            }
        }

        if (nextProps.type !== this.props.type) {
            return true;
        }

        return false;
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        this.updateColor(nextProps, nextContext);
    }

    componentDidMount() {
        this.updateColor(this.props, this.context);
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