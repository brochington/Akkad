import {PropTypes} from "react";
import AkkadAbstractComponent from "../AkkadAbstractComponent";

class RenderShape extends AkkadAbstractComponent {
    static contextTypes = {
        sceneID: PropTypes.string.isRequired,
        entityID: PropTypes.string,
        actions: PropTypes.object.isRequired,
        appState: PropTypes.object.isRequired
    }

    shouldComponentUpdate(nextProps) {
        for (let prop in nextProps) {
            if (nextProps[prop] !== this.props[prop]) {
                return true;
            }
        }

        return false;
    }

    componentWillMount() {
        const {sceneID, entityID, actions} = this.context;
        const {createShape} = actions._internal;

        createShape(sceneID, entityID, this.props);
    }

    componentWillUnmount() {
        const {actions, entityID} = this.context;
        const {disposeEntity} = actions._internal;

        disposeEntity(entityID);
    }
}

export default RenderShape;
