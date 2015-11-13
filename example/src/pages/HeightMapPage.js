import React, {Component} from 'react';
import {Akkad} from "akkad";
import HeightMapScene from "../scenes/HeightMapScene";

class ClickTheBox extends Component {
    render() {
        return (
            <Akkad>
                <HeightMapScene />
            </Akkad>
        );
    }
}

export default ClickTheBox;