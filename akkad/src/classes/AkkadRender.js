// import Immutable from 'immutable';
import React from 'react';

class DummyComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return this.props.children ? this.props.children : null;
    }
}

function isFunction(possibleFunc) {
    return possibleFunc instanceof Function;
}

function getNextContext(child, nextContext) {
    return child && isFunction(child.getChildContext)
                        ? {...nextContext, ...child.getChildContext()}
                        : nextContext;
}

function createTree(children, nextContext) {
    if (!children) return null;

    if (Array.isArray(children)) {
        return children.map(c => createTree(c, nextContext));
    }

    const child = isFunction(children.type)
                        ? new children.type(children.props, nextContext)
                        : children;

    const newContext = getNextContext(child, nextContext);

    const renderedResult = child.render
                                ? child.render()
                                : new DummyComponent(child.props, newContext);

    return {
        child,
        children: createTree(renderedResult, newContext)
    };
}

function mountComponents(componentTree) {
    if (Array.isArray(componentTree)) componentTree.map(mountComponents);

    const {child, children} = componentTree;

    if (child && isFunction(child.componentWillMount)) {
        child.componentWillMount(/*need to add nextProps, nextState, and nextContext */);
    }

    if (children) {
        mountComponents(children);
    }

    if (child && isFunction(child.componentDidMount)) {
        child.componentDidMount(/*need to add nextProps, nextState, and nextContext */);
    }
}

// function diffTrees(oldTree, newTree) {
//     // how do I do this...
//     console.log('diffTrees');
//     console.log(oldTree, newTree);
// }

function renderTree(treeObj, nextContext) {
    console.log('renderTree!', treeObj, nextContext);
    if (!treeObj) return null;
    if (Array.isArray(treeObj)) return treeObj.map((child)=> renderTree(child, nextContext));

    const {child, children} = treeObj;
    const newContext = getNextContext(child, nextContext);
    const newChildren = child && isFunction(child.render)
                            ? createTree(child.render())
                            : new DummyComponent(child.props, newContext);

    console.log('newChildren');
    console.log(children, newChildren);
    return {
        child,
        children
    };


}

class AkkadRender {
    _children = null;
    _componentTree = null;

    render(newChildren, newContext) {
        // If this is the first run.
        if (Object.is(this._children, null)) {
            const componentTree = createTree(newChildren, newContext);
            mountComponents(componentTree);
            this._children = newChildren;
            this._componentTree = componentTree;
            console.log(componentTree);
            return;
        }
        renderTree(this._componentTree, newContext);
        // diffTrees(this._oldComponentTree, componentTree);

        // save children to compare with on next render cycle.
        this._children = newChildren;

    }
}

export default AkkadRender;
