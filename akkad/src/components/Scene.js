import React, {PropTypes} from "react";
import Babylon from "babylonjs";

class Scene extends React.Component {
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
        
        setScene();
        startRenderLoop();
    }

    componentWillUnmount() {
        const {disposeScene} = this.context.actions._internal;
        
        disposeScene();
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default Scene;