import Babylon from "babylonjs";

const triggerActions = {
    setRandomDiffuseColor(state, actions, evt, meshID, triggerID) {
        const randomColor = new Babylon.Color3(Math.random(), Math.random(), Math.random());
        
        evt.source.material.diffuseColor = randomColor;

        return state;
    },

    testkeyUp(state, actions, evt, entityID, triggerID) {
        return state;
    },

    testKeyDown(state, actions, evt, entityID, triggerID) {
        const char = String.fromCharCode(evt.sourceEvent.keyCode);
        console.log("testKeyDown", char);

        return state;
    }
}

export default triggerActions;