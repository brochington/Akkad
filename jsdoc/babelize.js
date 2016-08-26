/* eslint-disable */
var babel = require('babel-core');

exports.handlers = {
    beforeParse: function(event) {
        var result = babel.transform(event.source, {presets: ["react", "es2015", "stage-0"]});
        event.source = result.code;
    }
};
