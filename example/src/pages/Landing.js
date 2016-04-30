import React, {Component, PropTypes} from 'react';
import {Link} from "react-router";
import {Akkad} from "akkad";

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
                    <li>
                        <Link to="/physics">physics</Link>
                    </li>
                </ul>
                {children}
            </div>
        );
    }
}

export default Landing;
