import React, {Component, PropTypes} from 'react';
import {Link} from "react-router";
import {Akkad} from "akkad";
import triggerActions from "../actions/triggerActions";
import TriggersScene from "../scenes/TriggersScene";
import Overlay from "../components/Overlay";

class Landing extends Component {
    render() {
        return (
            <div>
                <h2>
                    Triggers Demo
                </h2>
                <p>A small demo of various triggers</p>
                <Overlay />
                <Akkad actions={triggerActions}>
                    <TriggersScene />
                </Akkad>
            </div>
        );
    }
}

export default Landing;
