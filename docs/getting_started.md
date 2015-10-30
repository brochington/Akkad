Getting Started
===============

install akkad from npm:

```
npm install --save akkad
```

### Akkad :heart: Babylon

Akkad uses the awesome Babylonjs library throughout. It is beneficial to have at least a basic familiarity with the [Babylon API](http://doc.babylonjs.com/), especially if you would like to add you own custom components and systems.

### Hello Box

```
import React, {Component} from 'react';
import {Akkad, Scene, cameras, lights, shapes} from "akkad";

const {ArcRotateCamera} = cameras;
const {HemisphericLight} = lights;
const {Box} = shapes;

class App extends Component {
    render() {
        return (
            <Akkad>
                <Scene>
                    <ArcRotateCamera
                        initialPosition={[3, 4, -5]}
                        target={[0, 1, 0]}
                    />
                    <HemisphericLight />
                    <Box />
                </Scene>
            </Akkad>
        );
    }
}

export default App;
```

Above is the Akkad version of Hello World, which will display a 3D rendered cube that can be spun around in every which way. There are a few important things to note about the components used: 

- `<Akkad>`: The "master" component. Every Akkad application starts here. If you forget it, then things won't work :\

- `<Scene />`: Every Akkad application must contain a `<Scene />`. All the cool parts of your 3D creation will live as children of the Scene. You may exchange Scenes within an Akkad App. 

- Every Scene must also contain a Camera and Light component. See the components documentation for additional options beside `<ArcRotateCamera>` and `<HemisphericLigh>`, as well as details to what these actually do.

This is also a decent test bed for playing around with things, like other shapes such as spheres and cylinders.  

### Materials

Just a floating white Box is not much to look at, so lets add a color to it. In order to do this we need to add a `Material`, and a `system`. importing them looks like this:

```
import {Akkad, Scene, Material, cameras, lights, shapes, systems} from "akkad";

const {Color} = systems;
```

Materials allow us to place things onto 3D object. Think of it like painting or adding a sticker to our object, though they can be pretty darn powerful. The white opaque sides of the Box are the default for Babylon.

An explanation as to what systems are is coming soon, but for know think of them as modifiers to components like our `Box`.

When we add the Material and Color system to our `Box`, our application looks like this:

```
import React, {Component} from 'react';
import {Akkad, Scene, Material, cameras, lights, shapes, systems} from "akkad";

const {ArcRotateCamera} = cameras;
const {HemisphericLight} = lights;
const {Box} = shapes;
const {Color} = systems;

export class App extends Component {
    render() {
        return (
            <Akkad>
                <Scene>
                    <ArcRotateCamera
                        initialPosition={[3, 4, -5]}
                        target={[0, 1, 0]}
                    />
                    <HemisphericLight />
                    <Box>
                        <Material>
                            <Color color={[0, 0.8, 1]} />
                        </Material>
                    </Box>
                </Scene>
            </Akkad>
        );
    }
}

export default App;
```

Systems are extremly powerful. They can be used to update Position, Rotation, Animation, Particles, and the list goes on!
