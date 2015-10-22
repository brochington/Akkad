import Babylon from "babylonjs";

const triggerActions = {
    setRandomDiffuseColor(state, actions, evt, meshID, triggerID) {
        const randomColor = new Babylon.Color3(Math.random(), Math.random(), Math.random());
        
        evt.source.material.diffuseColor = randomColor;

        return state;
    }
}

export default triggerActions;