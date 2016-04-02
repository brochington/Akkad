import Babylon from "babylonjs";
import Immutable from "immutable";

const ParticlesActions = {
    createParticles(state, actions,sceneID, entityID, targetEntityID, img) {
        const scene = state().getIn(["entities", sceneID, "entity"]);
        const targetEntity = state().getIn(["entities", targetEntityID, "entity"]);

        const particles = new Babylon.ParticleSystem(entityID, 2000, scene);

        particles.particleTexture = new Babylon.Texture(img, scene);
        particles.emitter = targetEntity;

        const particlesObj = Immutable.Map({
            id: entityID,
            entity: particles,
            type: "particles"
        });

        return state().setIn(["entities", entityID], particlesObj);
    }
};

export default ParticlesActions;
