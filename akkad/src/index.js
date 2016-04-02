import components from "./components";
import importSystems from "./components/systems";

import importLights from "./components/lights";
import importCameras from "./components/cameras";
import importMeshes from "./components/meshes";
import importShapes from "./components/shapes";

export default {
    ...components,
    systems: importSystems,
    lights: importLights,
    cameras: importCameras,
    meshes: importMeshes,
    shapes: importShapes
};

export const systems = importSystems;
export const lights = importLights;
export const cameras = importCameras;
export const meshes = importMeshes;
export const shapes = importShapes;

export const Engine = components.Engine;
export const Scene  = components.Scene;
export const Material = components.Material;
export const Entity = components.Entity;
export const EntityLoaded = components.EntityLoaded;
export const Akkad = components.Akkad;
export const BasicAnimation = components.BasicAnimation;
export const Particles = components.Particles;
