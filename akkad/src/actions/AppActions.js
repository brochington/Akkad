export default {
    disposeEntity(state, actions, entityID) {
        return state().deleteIn(["entities", entityID]);
    }
};
