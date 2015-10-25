import Babylon from "babylonjs";
import Immutable from "immutable";

export default {
    setCanvas(state, actions, entityID, canvas) {
        const canvasObj = Immutable.Map({
            id: entityID,
            entity: canvas,
            type: "canvas"
        });

        state = state.set("canvasID", entityID);
        state = state.setIn(["entities", entityID], canvasObj);

        return state;
    },

    disposeCanvas(state, actions, canvasID) {
        state = state.delete("canvasID", canvasID);
        state = state.deleteIn(["entities", canvasID]);

        return state;
    },

    setEngine(state, actions, canvasID, engineID, setState) {
        const canvas = state.getIn(["entities", canvasID, "entity"]);

        const engineObj = Immutable.Map({
            id: engineID,
            entity: new Babylon.Engine(canvas, true),
            type: "engine"
        });

        state = state.set("engineID", engineID);
        state = state.setIn(["entities", engineID], engineObj);
        state = state.set("akkadTreeSetState", setState);

        return state;
    }
};