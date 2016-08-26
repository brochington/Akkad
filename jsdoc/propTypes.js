/* eslint-disable */
var _ = require('lodash');

function objToKeyValueArr(str) {
    return str
            .split('{')[1]
            .split('}')[0]
            .split('\n')
            .map(function(v) {
                return v.split(' ').filter(function(v){return v.length !== 0}).concat();
            })
            .filter(function(v) {
                return v.length > 0;
            })
            .map(function(v) {
                return {
                    key: v[0].replace(':', ''),
                    propType: v[1].replace('PropTypes.', '').replace(',', '')
                };
            });
}

exports.defineTags = function(dictionary) {
    dictionary.defineTag('proptypes', {
        onTagged: function(doclet, tag) {
            doclet.hasPropTypes = true;
        }
    });

    dictionary.defineTag('prop', {
        onTagged: function(doclet, tag) {
            if (!doclet.props) {doclet.props = []}
            doclet.props.push(tag.value);
        }
    });
}

exports.handlers = {
    beforeParse: function(event) {
        var src = event.source;
        var indexOfPropTypes = src.indexOf('static propTypes =');

        if (indexOfPropTypes >= 0) {
            var propTypes = src.split('static propTypes =')[1].split(';')[0];

            var propTypesLines = objToKeyValueArr(propTypes);
            var newDocBlock = propTypesLines.reduce(function(acc, propLine) {
                return acc += "* @property " + "{" + propLine.propType + "} " + propLine.key + "\n";
            }, "/**\n* @proptypes \n");

            newDocBlock += "*/\n";

            event.source = src.slice(0, indexOfPropTypes) + newDocBlock + src.slice(indexOfPropTypes);
        }
    }
};
