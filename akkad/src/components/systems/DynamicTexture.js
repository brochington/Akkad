import React, {PropTypes} from "react";
import Entity from "../Entity";
import EntityLoaded from "../EntityLoaded";
import RenderDynamicTexture from "./RenderDynamicTexture";
import SetEntityAsProperty from './SetEntityAsProperty';
import {GetContext} from './dynamicTextureSystems';

class DynamicTexture extends React.Component {
    static contextTypes = {
        entityID: PropTypes.string,
        appState: PropTypes.object,
        actions: PropTypes.object
    }

    static propTypes = {
        getContext: PropTypes.func,
        getSize: PropTypes.func
    }

    static defaultProps = {
        getContext: () => {},
        getSize: () => {}
    }

    render() {
        const {entityID} = this.context;
        const {children} = this.props;

        return (
            <Entity>
                <RenderDynamicTexture />
                <EntityLoaded>
                    <SetEntityAsProperty
                        targetEntityID={entityID}
                        propertyName="diffuseTexture"
                    />
                    <GetContext callback={this.props.getContext} />
                    {children}
                </EntityLoaded>
            </Entity>
        );
    }
}

export default DynamicTexture;
