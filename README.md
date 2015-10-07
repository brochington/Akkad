Akkad
========

A React Webgl target the uses the Babylon.js library. Create 3D scenes and games with React!

Example uses the awesome [react-transform-boilerplate](https://github.com/gaearon/react-transform-boilerplate)

### Development

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