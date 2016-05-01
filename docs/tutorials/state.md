State management with an Akkad Application
==========================================


State management is an important aspect of any no trivial Akkad Application. If all you want to create is a nice 3D view of something, or walk around a virtual how, you might not need it. Once you have any kinds of interactions, though, you will.

Akkad uses a State management techniques similar to that of [Redux](https://github.com/rackt/redux). The entire application has a single immutable object, that contains all the application's state. [ImmutableJS](https://facebook.github.io/immutable-js/) is used for this, so will want to check it out.

Let's create out a simple counter that increments when you click on a Box. The following example can be found in the example application in this repo.

We will create two files. The first is for Akkad application, and the second is our Scene:


####ClickTheBox.js

```
import React, {Component} from 'react';
import {Akkad} from "akkad";
import ClickTheBoxScene from "../scenes/ClickTheBoxScene";

const counterActions = {
    increment(state, actions) {
        return state().update("count", count => ++count);
    }
}

const initState = {
    count: 0
};

class ClickTheBox extends Component {
    render() {
        return (
            <Akkad
                initState={initState}
                actions={counterActions}
            >
                <ClickTheBoxScene />
            </Akkad>
        );
    }
}

export default ClickTheBox;
```

In this first file we define our Akkad app with `<Akkad />`. The Akkad component will take two props:

1) `actions`: this is an object of methods that can be called from within out Scene
2) `initState`: an object that contains any initial state we may want to set.

In our example we have an initState of `count: 0`, and we define one action that increments our count.

Now for our scene.

####ClickTheBoxScene.js
```
import React, {Component, PropTypes} from 'react';
import {Scene, shapes, cameras, lights, systems} from "akkad";

const {ArcRotateCamera} = cameras;
const {HemisphericLight} = lights;
const {Trigger} = systems;
const {Box} = shapes;

class ClickTheBoxScene extends Component {
    static contextTypes = {
        appState: PropTypes.object,
        actions: PropTypes.object
    }

    render() {
        const {appState, actions} = this.context;

        return (
            <div>
                <div>
                    count: {appState.get("count")}
                </div>
                <Scene>
                    <ArcRotateCamera
                        position={[3, 4, -5]}
                        target={[0, 1, 0]}
                    />
                    <HemisphericLight />
                    <Box>
                        <Trigger onClick={actions.increment} />
                    </Box>
                </Scene>
            </div>
        );
    }
}

export default ClickTheBoxScene;
```

Any children of an `<Akkad />` app will have access to the current application State(appState) and the actions that were added into the actions prop on the context.

This is a simple scene with one `<Box />`, which has a single `<Trigger />`. Triggers are systems that call a function when an event criteria is met. Check out the component docs for more info what trigger are available. In this case we are using an onClick event to "trigger" our increment action.

Actions are where all of the state updates take place, and really the only place that you can update state. They are "pure", which means that they must always return back the new state object. The first argument will always be "state", which is a function that returns the latest immutable state object. The second will always be "actions", in case you need to call any other actions from within the parent action. additional arguments may be passed into the action too, and will come after `state` and `actions`. Actions can be `async` functions, as well as generator functions,  so you can use `async/await` and `function*` with them too. Generator functions will be called until their are no more `yield`s, and each `yield` needs to return a a state object just like any other function. A very handy pattern is to `yield` an `async` function that is wrapped in an IIFE. This way you can make an async call, and once it's completed move on the next `yield`.  This approach makes dealing with async calls incredibly easy =)

Once our Action returns the new state object, our Akkad application is re-rendered, and any updates to our app/scene are made via the diffing process of React.

Pretty simple, right? ;)
