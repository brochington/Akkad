import React, {Component} from 'react';
import {Akkad} from "akkad";
import ClickTheBoxScene from "../scenes/ClickTheBoxScene";

const counterActions = {
    increment(state, actions) {
        return state.update("count", count => ++count);
    }
}

const initState = {
    count: 0
};

class ClickTheBox extends Component {
    render() {
        return (
            <Akkad 
                initState={initState}
                actions={counterActions}
            >
                <ClickTheBoxScene />
            </Akkad>
        );
    }
}

export default ClickTheBox;