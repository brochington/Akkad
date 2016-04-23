import React from 'react';
import _ from 'lodash';
// import Immutable from 'immutable';

class AbstractSystemComponent extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.id = Math.floor((1 + Math.random()) * 10000000000).toString(16);
    }

    static abstractType = "AbstractSystemComponent";

    static contextTypes = {
        appState: React.PropTypes.object,
        actions: React.PropTypes.object
    }

    /**
    * Accepts a non-complex map of props, and compares it to the previous batch.
    * Needed because hot reloading doesn't always trigger shouldComponentUpdate().
    */
    /* eslint-disable */
    propsChanged = (nextProps) => {
        // const InextProps = Immutable.Map(nextProps);
        // const areSame = Immutable.is(this.oldProps, InextProps);
        //
        // this.oldProps = InextProps;
        //
        // return areSame;


        // if (Object.keys(nextProps).length !== Object.keys(this.props).length) return false;
        //
        // for (let propKey in this.props) {
        //     const nextPropVal = nextProps[propKey];
        //     const currentPropVal = this.props[propKey]
        //
        //     switch (typeof nextPropVal) {
        //         case "number":
        //             if (nextPropVal !== currentPropVal) return false;
        //         break;
        //         case "string":
        //             if (nextPropVal !== currentPropVal) return false;
        //         break;
        //         case "boolean":
        //             if (nextPropVal !== currentPropVal) return false;
        //         break;
        //         case "undefined":
        //             if (!Object.is(currentPropVal, undefined)) return false;
        //         break;
        //         case "object":
        //             if (Array.isArray(nextPropVal)) {
        //                 if (nextPropVal.length !== currentPropVal.length) return false;
        //
        //                 for (let i = 0, l = nextPropVal.length; i<l; i ++) {
        //                     if (nextPropVal[i] !== currentPropVal[i]) return false;
        //                 }
        //             }
        //         break;
        //     }
        // }
        return !_.isEqual(nextProps, this.props);
    }
    /* eslint-enable */

    render() {
        // return this.props.children ? this.props.children : null;
        return this.props.children ? (
            <div>
                {this.props.children}
            </div>
        ) : null;
    }
}

export default AbstractSystemComponent;
