import React, {PropTypes} from "react";
import Babylon from "babylonjs";
import Entity from "./Entity";

class Scene extends React.Component {
    constructor() {
        super();
        
        this.id = Math.floor((1 + Math.random()) * 10000000000).toString(16);
    }

    static contextTypes = {
        appState: PropTypes.object,
        actions: PropTypes.object
    }

    static propTypes = {
        beforeRender: PropTypes.func,
        backgroundColor: PropTypes.array
    }

    componentDidMount() {
        const {setScene, startRenderLoop} = this.context.actions._internal;
        
        setScene(this.id);
        startRenderLoop(this.id);
    }

    componentWillUnmount() {
        const {disposeScene} = this.context.actions._internal;
        
        disposeScene();
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