Akkad
========

Akkad is React Webgl target the uses the Babylon.js library. Its aim is to allow any developer familiar with React the ability to create 3D scenes and games.

### Features

- Full power of React meets WebGL and Babylon
- Uses a redux-like state cycle
- Defined method of extention via Entities and Systems.

### Supports
- imported Meshes
- Materials with Textures
- Muliple forms of camera and light sources
- Basic Animations
- Basic triggers like onClick
- Lot's more to come!

## Example

A basic example of Akkad can be created in two files:

App.js

```
import React, {Component} from 'react';
import {Scene, Material, cameras, lights, shapes, systems} from "akkad";

const {ArcRotateCamera} = cameras;
const {HemisphericLight} = lights;
const {Sphere} = shapes;
const {Wireframe} = systems;

class App extends Component {
    render() {
        return (
            <Scene>
                <ArcRotateCamera
                    initialPosition={[0, 5, -10]}
                    target={[0, 1, 0]}
                />
                <HemisphericLight />
                <Sphere
                    segments={24}
                    diameterX={2}
                    diameterY={2}
                    diameterZ={2}
                >
                    <Material>
                        <Wireframe />
                    </Material>
                </Sphere>
            </Scene>
        );
    }
}

export default App;
```

index.js
```
import React from "react";
import ReactDOM from "react-dom";
import {Akkad} from "akkad";
import App from "./App";

const AkkadApp = (
    <Akkad canvasNode={document.getElementById("akkad-canvas")} >
        <App />
    </Akkad>
);

ReactDOM.render(AkkadApp, document.getElementById("root"));

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