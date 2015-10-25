import React, {Component, PropTypes} from 'react';
import {Link} from "react-router";
import {Akkad} from "akkad";
import triggerActions from "../actions/triggerActions";
import Scene1 from "../scenes/Scene1";

class Landing extends Component {
    render() {
        return (
            <div>
                <p>Try rotating and clicking on the box ;)</p>
                <Akkad actions={triggerActions}>
                    <Scene1 />
                </Akkad>
            </div>
        );
    }
}

export default Landing;
