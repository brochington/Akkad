Akkad
========

[![Join the chat at https://gitter.im/brochington/Akkad](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/brochington/Akkad?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

`npm install --save akkad`

#### Docs:

[Getting Started](https://github.com/brochington/Akkad/blob/master/docs/getting_started.md)

[Component Guide](https://github.com/brochington/Akkad/blob/master/docs/components.md)

[Systems tutorial](https://github.com/brochington/Akkad/blob/master/docs/tutorials/systems.md)


Akkad is a React Webgl target that uses the Babylon.js library. Its aim is to allow any developer familiar with React the ability to create 3D scenes and games.

### Features

- Full power of React meets WebGL and Babylon
- Embedd multiple interactive "scenes" directly in your React based site.
- Uses a redux-like state cycle
- Defined method of extention via Entities and Systems.

### Supports
- Imported Meshes
- Materials with Textures
- Muliple forms of camera and light sources
- Basic Animations
- Gravity
- Collisions
- Particles
- Basic triggers like onClick
- Lot's more to come!

## Example

A basic example of Akkad can be created in one file:

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

Please check out the example project included for more.


### Development

Akkad includes an example project for quick testing and development work. To use the example project:

link the akkad library in the example app. From the project root:
```
$ cd akkad
$ npm link
$ cd ../example
$ npm link akkad
$ npm start
```

In another terminal tab, navigate back to project root. Start up Akkad watch compilation:
```
$ cd akkad
$ npm run watch
```

This will allow you to make changes to Akkad live while you are running the example app.