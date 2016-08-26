import React from 'react';
import ShapeFactory from './ShapeFactory';

// import Sphere from "./Sphere";
// import Box from "./Box";
// import Disc from "./Disc";
// import Ground from "./Ground";
// import GroundFromHeightMap from "./GroundFromHeightMap";
// import Cylinder from "./Cylinder";
// import Torus from "./Torus";
// import Lines from "./Lines";
// import DashedLines from "./DashedLines";

// export default {
//     Sphere,
//     Box,
//     Disc,
//     Ground,
//     GroundFromHeightMap,
//     Cylinder,
//     Torus,
//     Lines,
//     DashedLines
// };

const shapes = [
    'Box',
    'Sphere',
    'IcoSphere',
    'Ribbon',
    'Cylinder',
    'Torus',
    'TorusKnot',
    'LineSystem',
    'Lines',
    'DashedLines',
    'Lathe',
    'Ground',
    'TiledGround',
    'Tube',
    'Polyhedron',
    'GroundFromHeightMap'
];

export default shapes.reduce((acc, shape) => {
    acc[shape] = (props) => {return <ShapeFactory type={shape} {...props} />;};
    return acc;
}, {});


/*
export default {
    Box(props){return <ShapeFactory type={'Box'} {...props} />;},
    Sphere(props){return <ShapeFactory type={'Sphere'} {...props} />;},
    IcoSphere(props){return <ShapeFactory type={'IcoSphere'} {...props} />;},
    Ribbon(props){return <ShapeFactory type={'Ribbon'} {...props} />;},
    Cylinder(props){return <ShapeFactory type={'Cylinder'} {...props} />;},
    Torus(props){return <ShapeFactory type={'Torus'} {...props} />;},
    TorusKnot(props){return <ShapeFactory type={'TorusKnot'} {...props} />;},
    LineSystem(props){return <ShapeFactory type={'LineSystem'} {...props} />;},
    DashedLines(props){return <ShapeFactory type={'DashedLines'} {...props} />;},
    Lines(props){return <ShapeFactory type={'Lines'} {...props} />;},
    Lathe(props){return <ShapeFactory type={'Lathe'} {...props} />;},
    Plane(props){return <ShapeFactory type={'Plane'} {...props} />;},
    Ground(props){return <ShapeFactory type={'Ground'} {...props} />;},
    TiledGround(props){return <ShapeFactory type={'TiledGround'} {...props} />;},
    Tube(props){return <ShapeFactory type={'Tube'} {...props} />;},
    Polyhedron(props){return <ShapeFactory type={'Polyhedron'} {...props} />;},
    GroundFromHeightMap(props){return <ShapeFactory type={'GroundFromHeightMap'} {...props} />;}
};
*/
