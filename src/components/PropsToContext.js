import React, {PropTypes} from "react";

/**
* A basic class to add actions and appState to the app's context.
* Might want to make this more generic if the need arises.
*/
class PropsToContext extends React.Component {
    static propTypes = {
        actions: PropTypes.object,
        appState: PropTypes.object,
        setStateDoneTunnel: PropTypes.func
    }

    static childContextTypes = {
        actions: PropTypes.object,
        appState: PropTypes.object,
        setStateDoneTunnel: PropTypes.func
    }

    getChildContext() {
        const {actions, appState, setStateDoneTunnel} = this.props;
        return {
            actions,
            appState,
            setStateDoneTunnel
        };
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default PropsToContext;
