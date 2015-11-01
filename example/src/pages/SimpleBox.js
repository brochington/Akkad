import React, {Component, PropTypes} from 'react';
import {Link} from "react-router";
import {Akkad} from "akkad";
import triggerActions from "../actions/triggerActions";
import Scene1 from "../scenes/Scene1";

class Landing extends Component {
    render() {
        return (
            <Akkad actions={triggerActions}>
                <h2>
                    Hello Box
                </h2>
                <p>Try rotating and clicking on the box ;)</p>
                <Scene1 />
            </Akkad>
        );
    }
}

export default Landing;
