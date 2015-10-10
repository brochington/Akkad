import React from 'react';
import ReactDOM from "react-dom";
import {Engine} from "akkad";
import {App} from './App';

const canvasStyles = {
	height: 480,
	width: 640
}

const myActions = {
	doSomething: (state, actions) => console.log("I done did something!")
}

const AkkadApp = (
	<Engine 
		actions={myActions}
		canvasStyles={canvasStyles} 
	>
		<App />
	</Engine>
);

ReactDOM.render(AkkadApp, document.getElementById('root'));
