import React, {PropTypes} from "react";

class Scene extends React.Component {
    constructor() {
        super();

        this.id = Math.floor((1 + Math.random()) * 10000000000).toString(16);
    }

    static propTypes = {
        styles: PropTypes.object
    }

    static contextTypes = {
        appState: PropTypes.object,
        actions: PropTypes.object
    }

    static childContextTypes = {
        sceneID: PropTypes.string,
        entityID: PropTypes.string // still setting id on entity for immediate child systems.
    }

    getChildContext() {
        return {
            sceneID: this.id,
            entityID: this.id
        };
    }

    componentDidMount() {
        console.log("this.context", this.context);
        const {setScene} = this.context.actions._internal;
        const canvas = this.refs[`akkadCanvas${this.id}`];

        setScene(this.id, canvas);
    }

    componentWillUnmount() {
        const {disposeScene} = this.context.actions._internal;

        disposeScene(this.id);
    }

    render() {
        const {appState} = this.context;
        const {styles, children} = this.props;
        const hasScene = appState.hasIn(["entities", this.id]);

        return (
            <div>
                <canvas
                    ref={`akkadCanvas${this.id}`}
                    className="akkad-canvas"
                    id={this.id}
                    style={styles}
                />
                <div>
                    {hasScene && children}
                </div>
            </div>
        );
    }
}

export default Scene;
