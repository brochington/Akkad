import Babylon from "babylonjs";
import Immutable from "immutable";

export default {
    setScene(state, actions, sceneID, canvas) {
        const canvasID = `canvas-${sceneID}`;
        const engineID = `engine-${sceneID}`;

        const engine = new Babylon.Engine(canvas, true);
        const scene = new Babylon.Scene(engine);

        const newState = state()
                .setIn(["entities", canvasID], Immutable.Map({
                    id: canvasID,
                    entity: canvas,
                    type: "canvas"
                }))
                .setIn(["entities", engineID], Immutable.Map({
                    id: engineID,
                    entity: engine,
                    type: "engine"
                }))
                .setIn(["entities", sceneID], Immutable.Map({
                    id: sceneID,
                    entity: scene,
                    type: "scene"
                }));

        engine.runRenderLoop(() => {
            scene.render();
        });

        return newState;
    },

    disposeScene(state, actions, sceneID) {
        const scene = state().getIn(["entities", sceneID, "entity"]);
        const engine = state().getIn(["entities", `engine-${sceneID}`, "entity"]);

        scene.dispose();

        engine.stopRenderLoop();

        return state()
                .deleteIn(["entities", sceneID])
                .deleteIn(["entities", `canvas-${sceneID}`])
                .deleteIn(["entities", `engine-${sceneID}`]);
    }
};
