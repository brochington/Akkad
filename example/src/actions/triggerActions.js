import Babylon from "babylonjs";

const triggerActions = {
    setRandomDiffuseColor(state, actions, evt, meshID, triggerID) {
        const randomColor = new Babylon.Color3(Math.random(), Math.random(), Math.random());

        evt.source.material.diffuseColor = randomColor;

        return state();
    },

    testKeyDown(state, actions, evt, entityID, triggerID) {
        const char = String.fromCharCode(evt.sourceEvent.keyCode);

        return state().set("lastKeyPressed", char);
    }
}

export default triggerActions;
