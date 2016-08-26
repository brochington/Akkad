import React, {PropTypes} from "react";

class EntityLoaded extends React.Component {
    static contextTypes = {
        entityID: PropTypes.string,
        appState: PropTypes.object
    }

    static propTypes = {
        entityID: PropTypes.string,
        appState: PropTypes.object
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        const entityID = nextContext.entityID || nextProps.entityID;
        const appState = nextContext.appState || nextProps.appState;

        return appState.hasIn(["entities", entityID]);
    }

    render() {
        const {context, props} = this;
        const {children} = props;
        const entityID = context.entityID || props.entityID;
        const appState = context.appState || props.appState;

        return appState && appState.hasIn(["entities", entityID]) && (
            <div>
                {children}
            </div>
        );
    }
}

export default EntityLoaded;
