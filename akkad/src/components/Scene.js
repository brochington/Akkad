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
        sceneID: PropTypes.string,
        entityID: PropTypes.string
    }

    getChildContext() {
        return {
            sceneID: this.id,
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
        const hasScene = appState.hasIn(["entities", this.id]);


        return hasScene ? (
            <div>
                {this.props.children}
            </div>
        ) : null;
    }
}

export default Scene;