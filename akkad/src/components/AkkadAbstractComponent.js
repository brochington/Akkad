import React, {PropTypes} from "react";

class AkkadAbstractComponent extends React.Component {
    constructor() {
        super();

        this.id = Math.floor((1 + Math.random()) * 10000000000).toString(16);
    }

    static contextTypes = {
        appState: PropTypes.object,
        actions: PropTypes.object
    }

    render() {
        return (
            <div style={{display: "none"}}>
                {this.props.children}
            </div>
        );
    }
}

export default AkkadAbstractComponent;
