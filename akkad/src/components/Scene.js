import React, {PropTypes} from "react";
import {AkkadRender} from "../classes";
// import Immutable from 'immutable';

class ShellComponent extends React.Component {
    static propTypes = {
        internalSetState: PropTypes.func
    }
    componentWillMount() {
        console.log('shell will mount');
    }

    _setState = (newState) => {
        console.log('hit _setState');
        this.setState(newState);
    }

    render() {
        console.log('will render!!');
        console.log(this, this.props);
        return (
            <span>
                {this.props.children}
            </span>
        );
    }
}

class Scene extends React.Component {
    constructor() {
        super();

        this.id = Math.floor((1 + Math.random()) * 10000000000).toString(16);
        this.akkadRender = new AkkadRender();
    }

    static propTypes = {
        styles: PropTypes.object
    }

    static contextTypes = {
        appState: PropTypes.object,
        actions: PropTypes.object,
        setStateDoneTunnel: PropTypes.func
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

    componentWillMount() {
        // this.context.setStateDoneTunnel(this.callAkkadRender);
    }

    componentDidMount() {
        const {setScene} = this.context.actions._internal;
        const canvas = this.refs[`akkadCanvas${this.id}`];

        setScene(this.id, canvas);
    }

    componentWillUnmount() {
        const {disposeScene} = this.context.actions._internal;

        disposeScene(this.id);
    }

    callAkkadRender = () => {
        // const {appState} = this.context;
        // const {children} = this.props;
        // const hasScene = appState.hasIn(["entities", this.id]);
        // const passedContext = {
        //     sceneID: this.id,
        //     entityID: this.id,
        //     ...this.context
        // };
        // if (hasScene) {
        //     this.akkadRender.render(<ShellComponent>{children}</ShellComponent>, passedContext);
        // }

    }

    render() {
        const {appState} = this.context;
        const {styles, children} = this.props;
        const hasScene = appState.hasIn(["entities", this.id]);

        // Note: because every scene will need a camera and light,
        //       I'll make the assumption that this will be always be an array.
        // console.log('scene context', this.context);


        // if (hasScene) {
        //     this.akkadRender.render(children, passedContext);
        // }

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
