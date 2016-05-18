import React, {PropTypes} from "react";
import AbstractSystemComponent from "../AbstractSystemComponent";

class AddSubMeshToMesh extends AbstractSystemComponent {
    static propTypes = {
        targetEntityID: PropTypes.string
    }
    componentWillMount() {
        console.log('AddSubMeshToMesh mount!', this.props.targetEntityID);
    }
}

export default AddSubMeshToMesh;
