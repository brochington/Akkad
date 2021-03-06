## Changelog

1.4.0

### New Features

- MeshBuilder is now used for all basic shapes, which brings the total number of shapes up. Total list of current shapes:

```
'Box',
'Sphere',
'IcoSphere',
'Ribbon',
'Cylinder',
'Torus',
'TorusKnot',
'LineSystem',
'Lines',
'DashedLines',
'Lathe',
'Ground',
'TiledGround',
'Tube',
'Polyhedron',
'GroundFromHeightMap'
```

props for each Shape component match the properties on the options object that are past to each `MeshBuilder.Create<Shape>` method. For more info, including these properties, see http://doc.babylonjs.com/classes/2.4/MeshBuilder

#### Breaking changes

- Lines and DashedLines have had the `vectors` property renamed to `points` to more closely match MeshBuilder API, and now takes an array of Vector3 instances.

#### updates
- Update to Babylon 2.4.0


1.3.2

#### New Features

- Adding basic support for `<MultiMaterial />` and `<SubMesh />`.
- Starting a basic Jenga-style demo at https://github.com/brochington/akkad-jenga

1.3.1

#### New Features

- Adding `<Rotation />` system, for static rotations of elements.

#### updates

- `<Box />` now has a height and width prop.
- Remove a bunch on console.logs.

1.3.0

#### New Features

- Adding `<DynamicTexture />` component, which exposes a canvas context as a texture. Now you can draw anything you can on a canvas to a surface texture. Much more work on this to come.

1.2.0

#### New Features
- Adding the `<Physics />` and `<PhysicsState />` systems, which add basic support for physics to a scene.

- Added `<Rotation />` system, which rotates the shape in an absolute fashion, unlike `<Rotate />`, which will affect the shape in a relative fashion.

#### Breaking Changes
- Camera Systems: `initialPosition` prop is now called `position`.
