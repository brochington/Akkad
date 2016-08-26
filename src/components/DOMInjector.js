import React, {PropTypes} from "react";
import EngineWrapper from "./EngineWrapper";

class DOMInjector extends React.Component {
    static propTypes = {
        appState: PropTypes.object, 
        actions: PropTypes.object
    }

    componentWillUpdate(nextProps) {
        const {appState} = nextProps;
        const setState = appState.get("akkadTreeSetState", () => {});
        setState(nextProps);
    }

    render() {
        const {children, appState, actions} = this.props;

        return (
            <EngineWrapper
                appState={appState}
                actions={actions}
            >
                {children}
            </EngineWrapper>
        );
    }
}

export default DOMInjector;
