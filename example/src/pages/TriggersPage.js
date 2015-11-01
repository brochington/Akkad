import React, {Component, PropTypes} from 'react';
import {Link} from "react-router";
import {Akkad} from "akkad";
import triggerActions from "../actions/triggerActions";
import TriggersScene from "../scenes/TriggersScene";
import Overlay from "../components/Overlay";

const initState = {};

class Landing extends Component {
    render() {
        return (
            <Akkad actions={triggerActions}>
                <h2>
                    Triggers Demo
                </h2>
                <p>A small demo of various triggers</p>
                    <TriggersScene />
            </Akkad>
        );
    }
}

export default Landing;
