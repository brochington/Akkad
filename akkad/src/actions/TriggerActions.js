import Babylon, {ActionManager, ExecuteCodeAction} from "babylonjs";
import Immutable from "immutable";

const triggerHandlers = {
    onClick: () => ActionManager.OnPickTrigger,
    onLeftClick: () => ActionManager.OnLeftPickTrigger,
    onRightClick: () => ActionManager.OnRightPickTrigger, // need to disable menu pop up...
    onMouseOver: () => ActionManager.OnPointerOverTrigger,
    onMouseOut: () => ActionManager.OnPointerOutTrigger,
    onKeyDown: () => ActionManager.OnKeyDown,
    onKeyUp: () => ActionManager.OnKeyUp
}

const TriggerActions = {
    createTriggers(state, actions, targetEntityID, entityID, triggers) {
        const mesh = state.getIn(["entities", targetEntityID, "entity"]);

        if (!mesh.actionManager) {
            const scene = state.getIn(["entities", state.get("sceneID"), "entity"]);
            mesh.actionManager = new ActionManager(scene);
        }
        
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
                            entity: new Babylon.ExecuteCodeAction(trigger, injectedFunc),
                            type: "trigger"
                        });
                    })
                    .forEach((triggerObj, triggerName) => {
                        mesh.actionManager.registerAction(triggerObj.get("entity"));
                    });

        return state;
    }
}

export default TriggerActions;