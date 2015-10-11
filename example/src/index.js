import React from 'react';
import ReactDOM from "react-dom";
import {Akkad} from "akkad";
import App from './App';

const canvasStyles = {
    height: 480,
    width: 640
}

const AkkadApp = (
    <Akkad 
        canvasStyles={canvasStyles}
        canvasNode={document.getElementById("akkad-canvas")}
    >
        <App />
    </Akkad>
);

ReactDOM.render(AkkadApp, document.getElementById('root'));
