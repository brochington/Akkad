import React, {Component, PropTypes} from 'react';
import {Link} from "react-router";
import {Akkad} from "akkad";

import WebVRScene1 from "../scenes/WebVRScene1";

class Landing extends Component {
    render() {
        return (
            <Akkad>
                <h2>
                    Web VR!
                </h2>
                <p>Trying out a webvr camera!!</p>
                <WebVRScene1 />
            </Akkad>
        );
    }
}

export default Landing;
