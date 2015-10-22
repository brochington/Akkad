import React from "react";
import ReactDOM from "react-dom";
import {Akkad} from "akkad";
import App from "./App";
import triggerActions from "./actions/triggerActions";

const AkkadApp = (
    <Akkad 
        actions={triggerActions}
        canvasNode={document.getElementById("akkad-canvas")} 
    >
        <App />
    </Akkad>
);

ReactDOM.render(AkkadApp, document.getElementById("root"));
