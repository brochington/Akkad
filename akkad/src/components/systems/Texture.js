import {PropTypes} from "react";
import Babylon from "babylonjs";
import AkkadAbstractComponent from "../AkkadAbstractComponent";

class Texture extends AkkadAbstractComponent {
    static contextTypes = {
        entityID: PropTypes.string,
        appState: PropTypes.object,
        actions: PropTypes.object
    }

    static propTypes = {
        image: PropTypes.string.isRequired
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.image !== this.props.image;
    }

    componentDidMount() {
        const {appState, entityID} = this.context;
        const {image} = this.props;
        const scene = appState.getIn(["entities", appState.get("sceneID"), "entity"]);

        const entityObj = appState.getIn(["entities", entityID]);
        const type = entityObj.get("type");
        const entity = entityObj.get("entity");

        const texture = new Babylon.Texture(image, scene);

        if (type === "material") {
            entity.diffuseTexture = texture;
        } else if (type === "particles") {
            entity.particleTexture = texture;
        }
    }

    componentWillUnmount() {
        const {appState, entityID} = this.context;

        const entity = appState.getIn(["entities", entityID, "entity"]);
        entity.diffuseTexture = null;
    }
}

export default Texture;