import React, {PropTypes} from "react";

class AbstractLight extends React.Component {
    constructor() {
        super();
        this.id = Math.floor((1 + Math.random()) * 10000000000)
    }

    static contextTypes = {
        appState: PropTypes.object,
        actions: PropTypes.object
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default AbstractLight;