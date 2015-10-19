import React, {PropTypes} from "react";
import Babylon from "babylonjs";
import Entity from "../Entity";
import EntityLoaded from "../EntityLoaded";
import {RenderLight, GenericProperty} from "../systems";

class SpotLight extends React.Component {
    static propTypes = {
        position: PropTypes.arrayOf(PropTypes.number),
        direction: PropTypes.arrayOf(PropTypes.number),
        angle: PropTypes.arrayOf(PropTypes.number),
        exponent: PropTypes.number,
        diffuse: PropTypes.arrayOf(PropTypes.number),
        specular: PropTypes.arrayOf(PropTypes.number)
    }

    render() {
        const {diffuse, specular, children} = this.props;

        const renderDiffuse = diffuse && (
            <GenericProperty 
                propertyName="diffuse"
                onVal={new Babylon.Color3(...diffuse)}
            />
        );

        const renderSpecular = specular && (
            <GenericProperty 
                propertyName="specular"
                onVal={new Babylon.Color3(...specular)}
            />
        );

        return (
            <Entity>
                <RenderLight 
                    type="spot"
                    {...this.props}
                />
                <EntityLoaded>
                    {renderDiffuse}
                    {renderSpecular}
                    {children}
                </EntityLoaded>
            </Entity>
        );
    }
}

export default SpotLight;
