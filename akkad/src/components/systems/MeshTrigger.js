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
    static propTypes = {
        onClick: PropTypes.func,
        onRightClick: PropTypes.func,
        onLeftClick: PropTypes.func,
        onRightClick: PropTypes.func,
        onMouseOver: PropTypes.func,
        onMouseOut: PropTypes.func,
        onKeyDown: PropTypes.func,
        onKeyUp: PropTypes.func
    }

    static contextTypes = {
        entityID: PropTypes.string,
        appState: PropTypes.object,
        actions: PropTypes.object
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        const {entityID, appState} = nextContext;
        const props = Immutable.Map(nextProps);

        if(appState && appState.has("scene") && appState.hasIn(["meshes", entityID])) {
            const {mesh} = appState.getIn(["meshes", entityID]);
            const scene = appState.get("scene");

            if (!mesh.actionManager) {
                mesh.actionManager = new ActionManager(scene);
            }

            const actions = props
                                .filter((func, prop) => triggerHandlers[prop])
                                .reduce((acc, func, prop) => {
                                    const trigger = triggerHandlers[prop](appState);
                                    return acc.push(new ExecuteCodeAction(trigger, func));
                                }, Immutable.List())
                                .forEach(action => mesh.actionManager.registerAction(action));
        }
    }
}

export default MeshTrigger;
