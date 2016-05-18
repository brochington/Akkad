import React from "react";
import AbstractSystemComponent from "../AbstractSystemComponent";
import Entity from "../Entity";
import EntityLoaded from "../EntityLoaded";
import RenderSubMesh from './RenderSubMesh';
import AddSubMeshToMesh from './AddSubMeshToMesh';

class SubMesh extends AbstractSystemComponent {
    componentDidMount() {
        console.log('Got a SubMesh!!');
    }

    componentWillUpdate() {

    }

    render() {
        const {entityID} = this.context;
        return (
            <Entity>
                <RenderSubMesh
                    targetEntityID={entityID}
                />
                <EntityLoaded>
                    <AddSubMeshToMesh
                        targetEntityID={entityID}
                    />
                </EntityLoaded>
            </Entity>
        );
    }
}

export default SubMesh;
