import React, {PropTypes} from "react";

class RenderAkkadCanvas extends React.Component  {
    static contextTypes = {
        entityID: PropTypes.string,
        actions: PropTypes.object, 
        appState: PropTypes.object
    }

    static propTypes = {
        appState: PropTypes.object, 
        actions: PropTypes.object
    }

    componentDidMount() {
        const {entityID} = this.context;
        const {actions} = this.props;
        const {setCanvas} = actions._internal;

        // creating a canvas DOM element outside of the react tree.
        const canvasWrapper = this.refs[`akkadCanvasWrapper${entityID}`];
        const canvas = document.createElement("canvas");
        canvas.id = entityID;
        canvas.className = "akkad-canvas";

        canvasWrapper.appendChild(canvas);

        setCanvas(entityID, canvas);
    }

    render() {
        const {entityID} = this.context;

        return (
            <div ref={`akkadCanvasWrapper${entityID}`} />
        );
    }
}

export default RenderAkkadCanvas;