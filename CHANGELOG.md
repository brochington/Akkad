## Changelog

1.3.0

#### New Features

- Adding `<DynamicTexture />` component, which exposes a canvas context as a texture. Now you can draw anything you can on a canvas to a surface texture. Much more work on this to come.

1.2.0

#### New Features
- Adding the `<Physics />` and `<PhysicsState />` systems, which add basic support for physics to a scene.

- Added `<Rotation />` system, which rotates the shape in an absolute fashion, unlike `<Rotate />`, which will affect the shape in a relative fashion.

#### Breaking Changes
- Camera Systems: `initialPosition` prop is now called `position`.
