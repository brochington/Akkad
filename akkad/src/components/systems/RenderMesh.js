import React, {PropTypes} from "react";
import AkkadAbstractComponent from "../AkkadAbstractComponent";

class RenderMesh extends AkkadAbstractComponent {
    static contextTypes = {
        entityID: PropTypes.string,
        appState: PropTypes.object, 
        actions: PropTypes.object,
    }

    static propTypes = {
        targetEntityID: PropTypes.string.isRequired,
        meshLocation: PropTypes.string.isRequired
    }

    componentDidMount() {
        const {targetEntityID, meshLocation} = this.props;
        const {actions, entityID} = this.context;
        const {importMesh} = actions._internal;

        importMesh(meshLocation, entityID);
    }

}

export default RenderMesh;