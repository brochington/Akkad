import React, {PropTypes} from "react";
import Entity from "./Entity";
import Babylon from "babylonjs";
import {RenderMaterial} from "./systems";

class Material extends React.Component {
    static contextTypes = {
        entityID: PropTypes.string,
        appState: PropTypes.object,
        actions: PropTypes.object
    }

    static childContextTypes = {
        meshID: PropTypes.string
    }

    getChildContext() {
        return {
            meshID: this.context.entityID
        }
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        const {entityID, appState} = nextContext;

        return appState.hasIn(["meshes", entityID]);
    }

    render() {
        const {entityID, appState} = this.context;
        const {children} = this.props;

        console.log("Material Render", entityID);
        // const meshHasMaterial = appState.hasIn(["meshes", entityID, "material"]);
        const material = appState.getIn(["meshes", entityID, "material"]);
        console.log("mesh", material);

        return (
            <Entity>
                <RenderMaterial />
                {material && children}
            </Entity>
        );
    }
}

export default Material;