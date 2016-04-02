Akkad Components
====================

# Standard Components

Every Akkad application requires both an <Akkad /> and <Scene /> component.

## `<Akkad />`

Top level component in an Akkad application.

Props:
- `initState<object>`: The initial state of you application
- `actions<Object>`: Object of methods that are internal actions

example:
```
<Akkad
	initState={{count: 0}}
	actions={{
		increment: state => state().update("count", count => ++count)
	}}
>
	<MyScene />
</Akkad>
```

## `<Scene />`

A component that houses the rest of your Akkad application components. You can have multiple `<Scene />` components in a single `<Akkad />` application.

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
- `source<[x, y, z]>`: The direction to the "sky"
- `diffuse<[r, g, b]>`: The color of the diffuse reflection of the light
- `specular<[r, g, b]>`: The color of the specular reflection of the light

## `<SpotLight />`
A Cone of light that starts from a position and emits towards a direction

#### Props:
- `position<[x, y, z]>`: Position of light
- `direction<[x, y, z]>`: Direction light is pointed
- `angle<Number>`: Size of the spotlight's conical beam (in radians)
- `exponent<[x, y, z]>`: Defines the speed of the decay of the light with distance
- `diffuse<[r, g, b]>`: The color of the diffuse reflection of the light
- `specular<[r, g, b]>`: The color of the specular reflection of the light

## `<PointLight />`

#### Props:
- `diffuse<[r, g, b]>`: The color of the diffuse reflection of the light
- `specular<[r, g, b]>`: The color of the specular reflection of the light

# Cameras

Every Akkad scene will require a camera See the [Babylon Camera tutorial](http://doc.babylonjs.com/tutorials/05._Cameras) for more information.

## `<FreeCamera />`

#### Props:
- `target<[x, y, z]>`: Required, Target of camera
- `initialPosition<[x, y, z]>`: Required, initial position of camera

## `<ArcRotateCamera />`

#### Props:
- `target<[x, y, z]>`: Required, Target of camera

# Particles:

## <Particles />

#### Props:
- `img<Url>`: Required, location of particle image.

# Shapes

## `<Box />`

### Props:
- `height<Number>`: Height of box
- `width<Number>`: Width of box

## `<Sphere />`

### Props:
- `segments<Number>`
- `diameterX<Number>`
- `diameterY<Number>`
- `diameterZ<Number>`

## `<Cylinder />`

### Props:
- `height<Number>`
- `diameterTop<Number>`
- `diameterBottom<Number>`
- `tessellation<Number>`
- `subdivisions<Any>`

## `<Torus />`

### Props:
- `diameter<Number>`
- `thickness<Number>`
- `tessellation<Number>`
- `updatable<Boolean>`
- `sideOrientation<Number>`

## `<Ground />`

### Props:
- `height<Number>`
- `width<Number>`
- `subdivisions<Any>`

## `GroundFromHeightMap />`

### Props:
- `meshHeight<Number>`: Height of the ground mesh
- `meshWidth<Number>`: Width of the ground mesh
- `heightMap<ImageURL>`: Url of height map image
- `subdivisions<Number>`: Complexity of the height map mesh, higher gives better detail
- `minHeight<Number>`: Lowest level of the height map mesh
- `maxHeight<Number>`: Highest level of the height map mesh

## `<Lines />`

### Props:
- `vectors<Array>`: An array of vector (x, y, z) arrays

## `<DashedLines />`

### Props:
- `vectors<Array>`: An array of vector (x, y, z) arrays
- `dashSize<Number>`: size of dash, relative to gapSize
- `gapSize<Number>`: size of gaps between dashes
- `dashNumber<Number>`: Number of gaps per line
