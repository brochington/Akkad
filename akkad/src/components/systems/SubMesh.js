import React, {PropTypes} from "react";
import AbstractSystemComponent from "../AbstractSystemComponent";
import Entity from "../Entity";
import EntityLoaded from "../EntityLoaded";
import RenderSubMesh from './RenderSubMesh';

class SubMesh extends AbstractSystemComponent {
    static propTypes = {
        materialIndex: PropTypes.number,
        verticesStart: PropTypes.number

    }
    componentDidMount() {
        console.log('Got a SubMesh!!');
    }

    componentWillUpdate() {

    }

    render() {
        const {entityID} = this.context;
        const {
            materialIndex = 0,
            verticesStart = 0,
            indexStart,
            indexCount
        } = this.props;

        return (
            <Entity>
                <RenderSubMesh
                    targetEntityID={entityID}
                    options={{
                        materialIndex,
                        verticesStart,
                        indexStart,
                        indexCount
                    }}
                />
                <EntityLoaded>
                    {this.props.children}
                </EntityLoaded>
            </Entity>
        );
    }
}

export default SubMesh;
