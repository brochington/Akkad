import Babylon from "babylonjs";
import Immutable from "immutable";

export default {
    setScene(state, actions, sceneID, canvas) {
        const canvasID = `canvas-${sceneID}`;
        const engineID = `engine-${sceneID}`;
        
        const engine = new Babylon.Engine(canvas, true);
        const scene = new Babylon.Scene(engine);

        state = state.setIn(["entities", canvasID], Immutable.Map({
            id: canvasID,
            entity: canvas,
            type: "canvas"
        }));

        state = state.setIn(["entities", engineID], Immutable.Map({
            id: engineID,
            entity: engine,
            type: "engine"
        }));

        state = state.setIn(["entities", sceneID], Immutable.Map({
            id: sceneID,
            entity: scene,
            type: "scene"
        }));

        engine.runRenderLoop(() => {
            scene.render();
        });

        return state;
    },

    disposeScene(state, actions, sceneID) {
        const scene = state.getIn(["entities", sceneID, "entity"]);
        const engine = state.getIn(["entities", `engine-${sceneID}`, "entity"]);

        scene.dispose();

        engine.stopRenderLoop();

        state.deleteIn(["entities", sceneID]);
        state.deleteIn(["entities", `canvas-${sceneID}`]);
        state.deleteIn(["entities", `engine-${sceneID}`]);

        return state;
    }
};