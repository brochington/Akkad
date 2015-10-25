import React, {PropTypes} from "react";

class Scene extends React.Component {
    constructor() {
        super();
       
        this.id = Math.floor((1 + Math.random()) * 10000000000).toString(16);
    }

    static contextTypes = {
        appState: PropTypes.object,
        actions: PropTypes.object
    }

    static childContextTypes = {
        entityID: PropTypes.string
    }

    getChildContext() {
        return {
            entityID: this.id
        };
    }

    componentDidMount() {
        const {setScene, startRenderLoop} = this.context.actions._internal;
        
        setScene(this.id);
        startRenderLoop(this.id);
    }

    componentWillUnmount() {
        const {disposeScene, stopRenderLoop} = this.context.actions._internal;
        
        stopRenderLoop();
        disposeScene(this.id);
    }

    render() {
        const {appState} = this.context;

        return appState.has("sceneID") ? (
            <div>
                {this.props.children}
            </div>
        ) : null;
    }
}

export default Scene;