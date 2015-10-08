import Babylon from "babylonjs";

const shapePropTransforms = {
    faceColors: (color4Array) => new Babylon.Color4(...color4Array),
    faceUV: (vector4Array) => new Babylon.Vector4(...vector4Array)
}

/* converts prop values to Babylon accepted values */
const convertShapeProps = (props) => {
    let newProps = {};

    for (let prop in props) {
        let val = props[prop];
        newProps[prop] = shapePropTransforms[prop] ? shapePropTransforms[prop](val) : val;
    }

    return newProps;
}

export default {
	convertShapeProps
}