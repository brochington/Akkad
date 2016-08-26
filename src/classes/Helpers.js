import {Color4, Vector4, Vector3, Space} from "babylonjs";
import Immutable from "immutable";

const shapePropTransforms = {
    faceColors: color4Array => new Color4(...color4Array),
    faceUV: vector4Array => new Vector4(...vector4Array),
    axis: vector3Array => new Vector3(...vector3Array),
    space: spaceType => Space[spaceType],
    vectors: vectors => vectors.map(vector => new Vector3(...vector))
};

/* converts prop values to Babylon accepted values */
export const convertShapeProps = (props) => {
    let newProps = {};

    for (let prop in props) {
        let val = props[prop];
        newProps[prop] = shapePropTransforms[prop] ? shapePropTransforms[prop](val) : val;
    }

    return newProps;
};

export const hasEntity = (appState = Immutable.Map(), entityID) => {
    return appState.hasIn(["entities", entityID, "entity"]);
};

export const getEntity = (appState = Immutable.Map(), entityID) => {
    return appState.getIn(["entities", entityID, "entity"], Immutable.Map()) || Immutable.Map();
};
