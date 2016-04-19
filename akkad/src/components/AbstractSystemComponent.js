import React from 'react';

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
