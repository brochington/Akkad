import React, {PropTypes} from "react";
import Entity from "./Entity";
import EntityLoaded from "./EntityLoaded";
import {RenderMaterial, SetEntityAsProperty} from "./systems";


class Material extends React.Component {
    static contextTypes = {
        entityID: PropTypes.string,
        appState: PropTypes.object,
        actions: PropTypes.object
    }
    
    render() {
        const {entityID} = this.context;
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