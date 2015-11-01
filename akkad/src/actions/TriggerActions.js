import {ActionManager, ExecuteCodeAction} from "babylonjs";
import Immutable from "immutable";

const triggerHandlers = {
    onClick: () => ActionManager.OnPickTrigger,
    onLeftClick: () => ActionManager.OnLeftPickTrigger,
    onRightClick: () => ActionManager.OnRightPickTrigger, // need to disable menu pop up...
    onMouseOver: () => ActionManager.OnPointerOverTrigger,
    onMouseOut: () => ActionManager.OnPointerOutTrigger,
    onKeyDown: () => ActionManager.OnKeyDownTrigger,
    onKeyUp: () => ActionManager.OnKeyUpTrigger
};

const TriggerActions = {
    createTriggers(state, actions, sceneID, targetEntityID, entityID, triggers) {
        const mesh = state.getIn(["entities", targetEntityID, "entity"]);

        /* Create an Action Manager on Mesh if it doesn't already exist */
        if (!mesh.actionManager) {
            const scene = state.getIn(["entities", sceneID, "entity"]);
            mesh.actionManager = new ActionManager(scene);
        }

        console.log("actionManager", mesh.actionManager);
        
        Immutable.Map(triggers)
                    .filter((func, triggerName) => triggerHandlers[triggerName])
                    .map((func, triggerName) => {
                        const trigger = triggerHandlers[triggerName]();
                        const injectedFunc = (evt) => {
                            return func(evt, targetEntityID, entityID);
                        };

                        return Immutable.Map({
                            targetEntityID,
                            triggerName,
                            id: entityID,
                            entity: new ExecuteCodeAction(trigger, injectedFunc),
                            type: "trigger"
                        });
                    })
                    .forEach(triggerObj => {
                        mesh.actionManager.registerAction(triggerObj.get("entity"));
                    });

        return state;
    },
    /**
    * For now this is just deleting the action manager. In the future this might need
    * to remove individual triggers from a mesh/scene.
    */
    disposeTriggers(state, actions, targetEntityID) {
        const mesh = state.getIn(["entities", targetEntityID, "entity"]);

        if (mesh.actionManager) {
            mesh.actionManager.dispose();
        }

        return state;
    }
};

export default TriggerActions;