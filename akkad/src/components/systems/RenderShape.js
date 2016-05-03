import {PropTypes} from "react";
import AbstractSystemComponent from "../AbstractSystemComponent";

class RenderShape extends AbstractSystemComponent {
    static contextTypes = {
        sceneID: PropTypes.string.isRequired,
        entityID: PropTypes.string,
        actions: PropTypes.object.isRequired,
        appState: PropTypes.object.isRequired
    }

    // shouldComponentUpdate(nextProps) {
    //     console.log('should this update?', nextProps);
    //     for (let prop in nextProps) {
    //         if (nextProps[prop] !== this.props[prop]) {
    //             return true;
    //         }
    //     }
    //     console.log('through');
    //     return false;
    // }

    componentWillMount() {
        const {sceneID, entityID, actions} = this.context;
        const {createShape} = actions._internal;

        createShape(sceneID, entityID, this.props);
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        if (this.propsChanged(nextProps)) {
            const {entityID, actions} = nextContext;
            const {updateShape} = actions._internal;

            updateShape(entityID, nextProps);
        }
    }

    componentWillUnmount() {
        const {actions, entityID} = this.context;
        const {disposeEntity} = actions._internal;

        disposeEntity(entityID);
    }
}

export default RenderShape;
