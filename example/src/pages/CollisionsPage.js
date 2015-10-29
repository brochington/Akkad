import React, {Component, PropTypes} from 'react';
import {Link} from "react-router";
import {Akkad} from "akkad";
import triggerActions from "../actions/triggerActions";
import CollisionsScene from "../scenes/CollisionsScene";

class CollisionsPage extends Component {
    render() {
        return (
            <div>
                <h2>
                    Collisions
                </h2>
                <Akkad actions={triggerActions}>
                    <CollisionsScene />
                </Akkad>
            </div>
        );
    }
}

export default CollisionsPage;

