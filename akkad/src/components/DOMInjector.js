import React, {PropTypes} from "react";
import Engine from "./Engine";

class EngineWrapper extends React.Component {
    static propTypes = {
        appState: PropTypes.object, 
        actions: PropTypes.object
    }

    getinitialState() {
        return {
            reactid: null
        };
    }

    componentDidMount() {
        const {engineWrapper} = this.refs;

        const {reactid} = engineWrapper.dataset;

        this.setState({reactid});
    }

    render() {
        const {children, appState, actions} = this.props;

        return (
            <div ref="engineWrapper">
                {this.state && this.state.reactid &&
                    <Engine 
                        appState={appState}
                        actions={actions}
                        reactid={this.state.reactid}

                    >
                    {children}
                    </Engine>
                }
            </div>
        );
    }
}

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
