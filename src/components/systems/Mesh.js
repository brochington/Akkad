import React, {PropTypes} from "react";
import Entity from "../Entity";
import EntityLoaded from "../EntityLoaded";
import RenderMesh from "./RenderMesh";

class Mesh extends React.Component {
    static contextTypes = {
        entityID: PropTypes.string,
        appState: PropTypes.object,
        actions: PropTypes.object
    }

    static propTypes = {
        path: PropTypes.string,
        fileName: PropTypes.string
    }

    render() {
        const {entityID} = this.context;
        const {path, fileName, children} = this.props;

        return (
            <Entity>
                <RenderMesh 
                    targetEntityID={entityID}
                    path={path}
                    fileName={fileName}
                />
                <EntityLoaded>
                    {children}
                </EntityLoaded>
            </Entity>
        );
    }
}

export default Mesh;