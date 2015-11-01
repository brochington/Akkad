import React, {PropTypes, Component} from "react";
import Immutable from "immutable";

/**
* A basic class to add actions and appState to the app's context.
* Might want to make this more generic if the need arises.
*/
class PropsToContext extends Component {
    static propTypes = {
        actions: PropTypes.object,
        appState: PropTypes.object
    }

    static childContextTypes = {
        actions: PropTypes.object,
        appState: PropTypes.object
    }

    getChildContext() {
        const {actions, appState} = this.props;
        return {
            actions,
            appState
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