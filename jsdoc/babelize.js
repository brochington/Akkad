var _ = require('lodash');
var babel = require('babel-core');

exports.handlers = {
    beforeParse: function(event) {
        console.log("got to beforeParse!!");
    }
};
