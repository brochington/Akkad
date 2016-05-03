import React from 'react';
import _ from 'lodash';
// import Immutable from 'immutable';

class AbstractSystemComponent extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.id = Math.floor((1 + Math.random()) * 10000000000).toString(16);
        this._propsChanged = true;
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

        this._propsChanged = !_.isEqual(nextProps, this.props);
        return this._propsChanged;
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
