import React, {PropTypes} from "react";
import ReactMultiChild from "react/lib/ReactMultiChild";
import {ReactReconcileTransaction} from "react/lib/ReactUpdates";

class AkkadComponent extends React.Component{
	constructor() {
		super();

		/* Poor man's way to do a mixin with a class */
		Object.keys(ReactMultiChild.Mixin)
			  .map(method => this[method] = ReactMultiChild.Mixin[method]);
	}

	displayName = "AkkadComponent"

	/* Need to define the root node so that you don't get undefined.0 */
	_rootNodeID = ".0"
	
	_performTransaction(func, scope, children, context) {
		const transaction = ReactReconcileTransaction.getPooled();
		transaction.perform(
			func, 
			scope, 
			children, 
			transaction, 
			context
		);
		ReactReconcileTransaction.release(transaction);
	}

	mountAppChildren(context = {}) {
		this._performTransaction(
			this._mountAppChildren,
			this,
			this.props.children,
			context
		);
	}

	_mountAppChildren(...args) {
		const mountedImages = this.mountChildren(...args);
	}

	updateAppChildren(context = {}) {
		this._performTransaction(
			this.updateChildren,
			this,
			this.props.children,
			context
		);
	}

	_updateAppChildren(...args) {
		this.updateChildren(...args);

	}
}; 

export default AkkadComponent;