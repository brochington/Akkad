import React, {PropTypes} from "react";
import Entity from "../Entity";
import EntityLoaded from "../EntityLoaded";
import {RenderShape} from "../systems";
import AkkadAbstractComponent from '../AkkadAbstractComponent';

class Sphere extends AkkadAbstractComponent {
    static propTypes = {
        segments: PropTypes.number,
        diameterX: PropTypes.number,
        diameterY: PropTypes.number,
        diameterZ: PropTypes.number
    };

    componentWillMount() {
        console.log("componentWillMount, duder!!");
    }

    componentWillUnmount() {
        console.log('testing unmounting of sphere');
    }

    render() {
        const {
            segments,
            diameterX,
            diameterY,
            diameterZ,
            children
        } = this.props;
        return (
            <Entity>
                <RenderShape
                    type="sphere"
                    segments={segments}
                    diameter={Math.sqrt(diameterX**2 + diameterY**2 + diameterZ**2)}
                />
                <EntityLoaded>
                    {children}
                </EntityLoaded>
            </Entity>
        );
    }
}

export default Sphere;
