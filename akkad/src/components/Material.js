import React, {PropTypes} from "react";
import Entity from "./Entity";
import Babylon from "babylonjs";
import {
    RenderMaterial, 
    GenericProperty,
    SetEntityAsProperty
} from "./systems";
import EntityLoaded from "./EntityLoaded";

class Material extends React.Component {
    static contextTypes = {
        entityID: PropTypes.string,
        appState: PropTypes.object,
        actions: PropTypes.object
    }

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     const {entityID, appState} = nextContext;

    //     return appState.hasIn(["entities", entityID]);
    // }

    render() {
        const {entityID, appState} = this.context;
        const {children} = this.props;

        return (
            <Entity>
                <RenderMaterial />
                <EntityLoaded>
                    <SetEntityAsProperty
                        targetEntityID={entityID}
                        propertyName="material"
                    />
                    {children}
                </EntityLoaded>
            </Entity>
        );
    }
}

export default Material;