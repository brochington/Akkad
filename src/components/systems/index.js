import importRenderShape from "./RenderShape";
import importRenderLight from "./RenderLight";
import importRenderCamera from "./RenderCamera";
import importRenderMaterial from "./RenderMaterial";
import importRenderAnimation from "./RenderAnimation";
import importRenderMesh from "./RenderMesh";
import importRenderParticles from "./RenderParticles";
import importRenderSubMesh from './RenderSubMesh';

import importTrigger from "./Trigger";
import importMesh from "./Mesh";

import importAnimateMesh from "./AnimateMesh";
import importPosition from "./Position";
import importRotate from "./Rotate";
import importRotation from './Rotation';
import importWireframe from "./Wireframe";
import importTexture from "./Texture";
import importColor from "./Color";
import importGravity from "./Gravity";
import importApplyGravity from "./ApplyGravity";
import importCheckCollisions from "./CheckCollisions";
import importCollisionsEnabled from "./CollisionsEnabled";
import importPhysics from './Physics';
import importPhysicsState from './PhysicsState';
import importDynamicTexture from './DynamicTexture';
import importSubMesh from './SubMesh';
import importMultiMaterial from './MultiMaterial';


// Components mostly used internally
import importGenericProperty from "./GenericProperty";
import importSetEntityAsProperty from "./SetEntityAsProperty";
import importCallMethodOnEntity from "./CallMethodOnEntity";
import importPushEntityOnProperty from './PushEntityOnProperty';

export default {
    RenderShape: importRenderShape,
    RenderLight: importRenderLight,
    RenderCamera: importRenderCamera,
    RenderMaterial: importRenderMaterial,
    RenderAnimation: importRenderAnimation,
    RenderMesh: importRenderMesh,
    RenderParticles: importRenderParticles,
    RenderSubMesh: importRenderSubMesh,
    Trigger: importTrigger,
    Mesh: importMesh,
    AnimateMesh: importAnimateMesh,
    Position: importPosition,
    Rotate: importRotate,
    Rotation: importRotation,
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
    PushEntityOnProperty: importPushEntityOnProperty,
    Physics: importPhysics,
    PhysicsState: importPhysicsState,
    DynamicTexture: importDynamicTexture,
    SubMesh: importSubMesh,
    MultiMaterial: importMultiMaterial
};

export const RenderShape = importRenderShape;
export const RenderLight = importRenderLight;
export const RenderCamera = importRenderCamera;
export const RenderMaterial = importRenderMaterial;
export const RenderAnimation = importRenderAnimation;
export const RenderMesh = importRenderMesh;
export const RenderParticles = importRenderParticles;
export const RenderSubMesh = importRenderSubMesh;
export const Trigger =importTrigger;
export const Mesh = importMesh;
export const AnimateMesh = importAnimateMesh;
export const Position = importPosition;
export const Rotate = importRotate;
export const Rotation = importRotation;
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
export const PushEntityOnProperty = importPushEntityOnProperty;
export const Physics = importPhysics;
export const PhysicsState = importPhysicsState;
export const DynamicTexture = importDynamicTexture;
export const SubMesh = importSubMesh;
export const MultiMaterial = importMultiMaterial;
