import React, {Component, PropTypes} from 'react';
import {Link} from "react-router";
import {Akkad} from "akkad";
import triggerActions from "../actions/triggerActions";
import Scene1 from "../scenes/Scene1";

class Landing extends Component {
    render() {
        return (
            <div>
                <h2>
                    Welcome to the Akkad example App!!
                </h2>
                <p>Try rotating and clicking on the box ;)</p>
                <Link to="/mesh">Mesh example</Link>
                <Akkad actions={triggerActions}>
                    <Scene1 />
                </Akkad>
            </div>
        );
    }
}

export default Landing;
