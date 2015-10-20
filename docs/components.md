Akkad Components
====================

# Standard Components

Every Akkad application requires both an <Akkad /> and <Scene /> component.

## `<Akkad />`

Top level component in an Akkad application.

Props:
- `canvasNode<Element>`: element that will Babylon will target

example:
```
<Akkad canvasNode={document.getElementById("akkad-canvas")} >
	<MyApplication />
</Akkad>
```

## `<Scene />`

A component that houses the rest of your Akkad application. Every Akkad must include a single `<Scene>`

# Lights

Every Akkad scene requires at least one light source. See the [Babylon lighting tutorial](http://doc.babylonjs.com/tutorials/06._Lights) for more information.

## `<DirectionalLight />`
A Directional light is defined by a direction. Light is from everywhere and focused towards a specific direction. By default the light is created at origin `[0, 0, 0]`

#### Props:
- `direction<[x, y, z]>`: Vector in which the light is focused
- `diffuse<[r, g, b]>`: The color of the diffuse reflection of the light
- `specular<[r, g, b]>`: The color of the specular reflection of the light

## `<HemisphericLight />`
#### Props:
- `source<[x, y, z]>`: the direction to the "sky"
- `diffuse<[r, g, b]>`: The color of the diffuse reflection of the light
- `specular<[r, g, b]>`: The color of the specular reflection of the light

## `<SpotLight />`
A Cone of light that starts from a position and emits towards a direction

#### Props:
- `position<[x, y, z]>`: Position of light
- `direction<[x, y, z]>`: Direction light is pointed
- `angle<Number>`: Angle of light
- `exponent<[x, y, z]>`:
- `diffuse<[r, g, b]>`: The color of the diffuse reflection of the light
- `specular<[r, g, b]>`: The color of the specular reflection of the light

## `<PointLight />`

# Cameras

Every Akkad scene will require a camera See the [Babylon Camera tutorial](http://doc.babylonjs.com/tutorials/05._Cameras) for more information.

## `<FreeCamera />`
## `<ArcRotateCamera />`

# Shapes

## `<Box />`
## `<Sphere />`
## `<Ground />`