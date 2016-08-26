import React, {PropTypes} from "react";
import Entity from "../Entity";
import EntityLoaded from "../EntityLoaded";
import RenderDynamicTexture from "./RenderDynamicTexture";
import SetEntityAsProperty from './SetEntityAsProperty';
import {
    GetCanvasContext,
    CanvasContextToContext,
    RasterizeMarkup
} from './dynamicTextureSystems';

class DynamicTexture extends React.Component {
    static contextTypes = {
        entityID: PropTypes.string,
        appState: PropTypes.object,
        actions: PropTypes.object
    }

    static propTypes = {
        getCanvasContext: PropTypes.func,
        getCanvasSize: PropTypes.func
    }

    static defaultProps = {
        getCanvasContext: () => {},
        getCanvasSize: () => {}
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
                    <GetCanvasContext callback={this.props.getCanvasContext} />
                    <CanvasContextToContext>
                        <RasterizeMarkup>
                            {children}
                        </RasterizeMarkup>
                    </CanvasContextToContext>
                </EntityLoaded>
            </Entity>
        );
    }
}

export default DynamicTexture;
