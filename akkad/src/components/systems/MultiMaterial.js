import React, {PropTypes} from "react";
import AbstractSystemComponent from "../AbstractSystemComponent";
import Entity from "../Entity";
import EntityLoaded from '../EntityLoaded';
import SetEntityAsProperty from './SetEntityAsProperty';
import RenderMultiMaterial from './RenderMultiMaterial';

class MultiMaterial extends AbstractSystemComponent {
    static childContextTypes = {
        inMultiMaterial: PropTypes.bool
    }

    getChildContext() {
        return {
            inMultiMaterial: true
        };
    }

    render() {
        const {entityID} = this.context;
        return (
            <Entity altContextTypes={{'meshID': entityID}}>
                <RenderMultiMaterial />
                <EntityLoaded>
                    <SetEntityAsProperty
                        targetEntityID={entityID}
                        propertyName="material"
                    />
                    {this.props.children}
                </EntityLoaded>
            </Entity>
        );
    }
}

export default MultiMaterial;
