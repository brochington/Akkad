import React from 'react';
import ReactDOM from "react-dom";
import {Engine} from "akkad";
import {App} from './App';

const canvasStyles = {
	height: 480,
	width: 640
}

const AkkadApp = (
	<Engine canvasStyles={canvasStyles} >
		<App />
	</Engine>
);

ReactDOM.render(AkkadApp, document.getElementById('root'));
