import React from 'react';
import ReactDOM from "react-dom";
import {Akkad} from "akkad";
import App from './App';

const AkkadApp = (
    <Akkad canvasNode={document.getElementById("akkad-canvas")} >
        <App />
    </Akkad>
);

ReactDOM.render(AkkadApp, document.getElementById('root'));
