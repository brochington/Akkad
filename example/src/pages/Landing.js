import React, {Component, PropTypes} from 'react';
import {Link} from "react-router";
import {Akkad} from "akkad";
import triggerActions from "../actions/triggerActions";
import Scene1 from "../scenes/Scene1";

class TestComponent extends Component {
    constructor() {
        super();
        this.id = Math.random() * 100000;
    }
    componentWillMount() {
        console.log("componentWillMount", this.id, this.props.myID);
    }

    componentDidMount() {
        console.log('componentDidMount', this.id, this.props.myID);
    }

    render() {
        return (
            <div>
             {this.props.children}
            </div>
        )
    }
};

class Landing extends Component {
    render() {
        const {children} = this.props;
        return (
            <div>
                <h2>
                    Welcome to the Akkad example App!!
                </h2>
                <ul>
                    <li>
                        <Link to="/simple-box">Simple Box</Link>
                    </li>
                    <li>
                        <Link to="/mesh">Mesh</Link>
                    </li>
                    <li>
                        <Link to="/shapes">Shapes</Link>
                    </li>
                    <li>
                        <Link to="/collisions">Collisions</Link>
                    </li>
                    <li>
                        <Link to="/triggers">Triggers</Link>
                    </li>
                    <li>
                        <Link to="/clickthebox">Click The Box</Link>
                    </li>
                    <li>
                        <Link to="/heightmap">Height Map</Link>
                    </li>
                    <li>
                        <Link to="/webvr">Web VR</Link>
                    </li>
                </ul>
                {children}
                {/*<TestComponent myID="1">
                    <TestComponent myID="2">
                        <TestComponent myID="3"/>
                    </TestComponent>
                </TestComponent>
                <TestComponent myID="4"/>*/}
            </div>
        );
    }
}

export default Landing;
