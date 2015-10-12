import React, {PropTypes} from "react";
import Babylon from "babylonjs";

class EntityLoaded extends React.Component {
    static contextTypes = {
        entityID: PropTypes.string,
        appState: PropTypes.object
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        const {entityID, appState} = nextContext;

        return appState.hasIn(["entities", entityID]);
    }

    render() {
        const {entityID, appState} = this.context;
        const {children} = this.props;

        return appState.hasIn(["entities", entityID]) && (
            <div>
                {children}
            </div>
        );
    }
}

export default EntityLoaded;
