import React, {PropTypes} from "react";
import Babylon from "babylonjs";
import Entity from "../Entity";
import EntityLoaded from "../EntityLoaded";
import RenderMesh from "./RenderMesh";

class Mesh extends React.Component {
    static contextTypes = {
        entityID: PropTypes.string,
        appState: PropTypes.object, 
        actions: PropTypes.object,
    }

    static propTypes = {
        meshLocation: PropTypes.string
    }

    render() {
        const {entityID} = this.context;
        const {meshLocation} = this.props;
        return (
            <Entity>
                <RenderMesh 
                    targetEntityID={entityID}
                    meshLocation={meshLocation}
                />
                <EntityLoaded>
                </EntityLoaded>
            </Entity>
        );
    }
}

export default Mesh;