import React, {PropTypes} from "react";

class RenderAkkadCanvas extends React.Component  {
    static contextTypes = {
        entityID: PropTypes.string,
        actions: PropTypes.object, 
        appState: PropTypes.object
    }

    static propTypes = {
        appState: PropTypes.object, 
        actions: PropTypes.object,
        styles: PropTypes.object
    }

    componentDidMount() {
        const {entityID} = this.context;
        const {actions} = this.props;
        const {setCanvas} = actions._internal;
        const canvas = this.refs[`akkadCanvas${entityID}`];

        setCanvas(entityID, canvas);
    }

    componentWillUnmount() {
        const {entityID} = this.context;
        const {actions} = this.props;
        const {disposeCanvas} = actions._internal;

        disposeCanvas(entityID);
    }

    render() {
        const {entityID} = this.context;
        const {styles} = this.props;

        return (
            <canvas 
                ref={`akkadCanvas${entityID}`}
                className="akkad-canvas"
                id={entityID}
                style={styles}
            />
        );
    }
}

export default RenderAkkadCanvas;