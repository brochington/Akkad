import {PropTypes} from "react";
import AkkadAbstractComponent from "../AkkadAbstractComponent";

class RenderShape extends AkkadAbstractComponent {
    static contextTypes = {
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
        const {entityID, actions} = this.context;
        const {createShape} = actions._internal;

        createShape(entityID, this.props);
    }
}

export default RenderShape;
