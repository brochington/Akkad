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

function createTree(children, nextContext) {
    if (!children) return null;

    if (Array.isArray(children)) {
        return children.map(c => createTree(c, nextContext));
    }

    const child = children.type instanceof Function
                        ? new children.type(children.props, nextContext)
                        : children;

    const renderedResult = child.render
                                ? child.render()
                                : new DummyComponent(child.props, nextContext);

    return {
        child,
        children: createTree(renderedResult, nextContext)
    };
}

function mountComponents(componentTree) {

    if (Array.isArray(componentTree)) {
        componentTree.map(mountComponents);
    }
    const {child, children} = componentTree;
    console.log('child', componentTree);
    if (child && child.componentWillMount instanceof Function) {
        child.componentWillMount(/*need to add nextProps, nextState, and nextContext */);
    }

    if (children) {
        mountComponents(children);
    }
}

class AkkadRender {
    _children = null;

    render(newChildren, newContext) {
        // If this is the first run.
        if (Object.is(this._children, null)) {
            console.log('first render', newChildren, newContext);
            // ImmutableChildren.map(child => child.componentWillMount && child.componentWillMount());
            // ImmutableChildren.map(child => child.render && child.render());
            console.time('createTree');
            const componentTree = createTree(newChildren, newContext);
            mountComponents(componentTree);
            console.timeEnd('createTree');
            console.log("componentTree", componentTree);
            this._children = newChildren;
            return;
        }

        createTree(newChildren, newContext);

        // save children to compare with on next render cycle.
        this._children = newChildren;

    }
}

export default AkkadRender;
