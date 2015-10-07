import React, {Component} from 'react';
import {Engine} from "akkad";

const canvasStyles = {
	height: 480,
	width: 640
}

export class App extends Component {
  render() {
  	console.log("Akkad", Engine);
    return (
      	<Engine canvasStyles={canvasStyles} >
		
		</Engine>
    );
  }
}