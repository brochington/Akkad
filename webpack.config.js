/* eslint-disable */
var path = require('path');
var webpack = require("webpack");

module.exports = {
    entry: [
        "./src/index.js"
    ],
    output: {
        path: __dirname + '/build/',
        filename: 'bundle.js',
        publicPath: '/build/',
        library: "akkad",
        libraryTarget: "umd"
    },
    externals: {
        "babylonjs": "babylonjs",
        "react": "react",
        "react-dom": "react-dom",
        "immutable": "immutable",
        "react/lib/ReactMultiChild": "react/lib/ReactMultiChild",
        "react/lib/ReactUpdates": "react/lib/ReactUpdates"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            include: path.join(__dirname, 'src'),
            query: {
                cacheDirectory: true,
                presets: ["react", "es2015", "stage-0"]
            }
        }, {
            test: /\.js$/,
            loader: "eslint-loader",
            exclude: /node_modules/
        }]
    },
    resolve: {
        alias: {
            // react: path.join(__dirname, 'node_modules', 'react')
        },
        extensions: ['', '.js']
    }
}
