import React, {PropTypes} from "react";
import Immutable from "immutable";
import Babylon, {ActionManager, ExecuteCodeAction} from "babylonjs";
import AkkadAbstractComponent from "../AkkadAbstractComponent";
import {Helpers} from "../../classes";


const triggerHandlers = {
    onClick: () => ActionManager.OnPickTrigger,
    onLeftClick: () => ActionManager.OnLeftPickTrigger,
    onRightClick: () => ActionManager.OnRightPickTrigger, // need to disable menu pop up...
    onMouseOver: () => ActionManager.OnPointerOverTrigger,
    onMouseOut: () => ActionManager.OnPointerOutTrigger,
    onKeyDown: () => ActionManager.OnKeyDown,
    onKeyUp: () => ActionManager.OnKeyUp
}

class MeshTrigger extends AkkadAbstractComponent {
    static contextTypes = {
        entityID: PropTypes.string,
        appState: PropTypes.object,
        actions: PropTypes.object
    }



    shouldComponentUpdate(nextProps) {
        for (let prop in nextProps) {
            if (nextProps[prop] !== this.props[prop]) {
                return true
            }
        }

        return false;
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        const {entityID, appState, actions} = nextContext;
        const { createMeshTriggers, updateMeshTriggers} = actions._internal;
        const props = Immutable.Map(nextProps);

        if (appState && appState.has("scene") && appState.hasIn(["meshes", entityID])) {
            const mesh = appState.getIn(["meshes", entityID, "mesh"]);
            const scene = appState.get("scene");

            if (appState.hasIn(["meshes", entityID, "triggers"])) {
                updateMeshTriggers(entityID, nextProps);
            } else {
                createMeshTriggers(entityID, nextProps);
            }
            

            // const actions = props
            //                     .filter((func, prop) => triggerHandlers[prop])
            //                     .reduce((acc, func, prop) => {
            //                         const trigger = triggerHandlers[prop](appState);
            //                         return acc.push(new ExecuteCodeAction(trigger, func));
            //                     }, Immutable.List())
            //                     .forEach(action => mesh.actionManager.registerAction(action));
        }
    }
}

export default MeshTrigger;
