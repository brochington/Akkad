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
        const {sceneID, entityID, actions, appState} = nextContext;
        const {updateShape, createShape} = actions._internal;

        if (this.propsChanged(nextProps)) {

            if (!appState.hasIn(['entities', entityID])) {
                createShape(sceneID, entityID, nextProps);
            } else {
                updateShape(entityID, nextProps);
            }
        }

        if (!appState.hasIn(['entities', entityID])) {
            createShape(sceneID, entityID, nextProps);
        }
    }

    componentWillUnmount() {
        const {actions, entityID} = this.context;
        const {destroyShape} = actions._internal;

        destroyShape(entityID);
    }
}

export default RenderShape;
