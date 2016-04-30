import importRenderShape from "./RenderShape";
import importRenderLight from "./RenderLight";
import importRenderCamera from "./RenderCamera";
import importRenderMaterial from "./RenderMaterial";
import importRenderAnimation from "./RenderAnimation";
import importRenderMesh from "./RenderMesh";
import importRenderParticles from "./RenderParticles";

import importTrigger from "./Trigger";
import importMesh from "./Mesh";

import importAnimateMesh from "./AnimateMesh";
import importPosition from "./Position";
import importRotate from "./Rotate";
import importWireframe from "./Wireframe";
import importTexture from "./Texture";
import importColor from "./Color";
import importGravity from "./Gravity";
import importApplyGravity from "./ApplyGravity";
import importCheckCollisions from "./CheckCollisions";
import importCollisionsEnabled from "./CollisionsEnabled";
import importPhysics from './Physics';
import importPhysicsState from './PhysicsState';

// Components mostly used internally
import importGenericProperty from "./GenericProperty";
import importSetEntityAsProperty from "./SetEntityAsProperty";
import importCallMethodOnEntity from "./CallMethodOnEntity";

export default {
    RenderShape: importRenderShape,
    RenderLight: importRenderLight,
    RenderCamera: importRenderCamera,
    RenderMaterial: importRenderMaterial,
    RenderAnimation: importRenderAnimation,
    RenderMesh: importRenderMesh,
    RenderParticles: importRenderParticles,
    Trigger: importTrigger,
    Mesh: importMesh,
    AnimateMesh: importAnimateMesh,
    Position: importPosition,
    Rotate: importRotate,
    Wireframe: importWireframe,
    Color: importColor,
    Texture: importTexture,
    Gravity: importGravity,
    ApplyGravity: importApplyGravity,
    CheckCollisions: importCheckCollisions,
    CollisionsEnabled: importCollisionsEnabled,
    GenericProperty: importGenericProperty,
    SetEntityAsProperty: importSetEntityAsProperty,
    CallMethodOnEntity: importCallMethodOnEntity,
    Physics: importPhysics,
    PhysicsState: importPhysicsState
};

export const RenderShape = importRenderShape;
export const RenderLight = importRenderLight;
export const RenderCamera = importRenderCamera;
export const RenderMaterial = importRenderMaterial;
export const RenderAnimation = importRenderAnimation;
export const RenderMesh = importRenderMesh;
export const RenderParticles = importRenderParticles;
export const Trigger =importTrigger;
export const Mesh = importMesh;
export const AnimateMesh = importAnimateMesh;
export const Position = importPosition;
export const Rotate = importRotate;
export const Wireframe = importWireframe;
export const Color = importColor;
export const Texture = importTexture;
export const Gravity = importGravity;
export const ApplyGravity = importApplyGravity;
export const CheckCollisions = importCheckCollisions;
export const CollisionsEnable = importCollisionsEnabled;
export const GenericProperty = importGenericProperty;
export const SetEntityAsProperty = importSetEntityAsProperty;
export const CallMethodOnEntity = importCallMethodOnEntity;
export const Physics = importPhysics;
export const PhysicsState = importPhysicsState;
