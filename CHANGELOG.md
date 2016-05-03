## Changelog

1.2.0

#### New Features
- Adding the `<Physics />` and `<PhysicsState />` systems, which add basic support for physics to a scene.

- Added `<Rotation />` system, which rotates the shape in an absolute fashion, unlike `<Rotate />`, which will affect the shape in a relative fashion.

#### Breaking Changes
- Camera Systems: `initialPosition` prop is now called `position`.
