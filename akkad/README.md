Akkad
========

Akkad is a React Webgl target that uses the Babylon.js library. Its aim is to allow any developer familiar with React the ability to create 3D scenes and games.

### Features

- Full power of React meets WebGL and Babylon
- Embedded interactive "Scene" directly in your React based site.
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

A basic example of Akkad can be created in two files:

Page.js

```
import React, {Component, PropTypes} from 'react';
import {Akkad} from "akkad";
import Scene1 from "./Scene1";

class Page extends Component {
    render() {
        return (
            <div>
                <Akkad style={{width: "100%", height: "100%"}} >
                    <Scene1 />
                </Akkad>
            </div>
        );
    }
}

export default Page;
```

Scene1.js
```
import React, {Component, PropTypes} from 'react';
import {Scene, cameras, lights, shapes, systems} from "akkad";

const {ArcRotateCamera} = cameras;
const {HemisphericLight} = lights;
const {Box} = shapes;

class Scene1 extends Component {
    render() {
        return (
            <Scene>
                <ArcRotateCamera
                    initialPosition={[0, 5, -10]}
                    target={[0, 1, 0]}
                />
                <HemisphericLight />
                <Box />
            </Scene>
        );
    }
}

export default Scene1;
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