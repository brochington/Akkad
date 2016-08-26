import React, {PropTypes} from "react";
import Entity from "./Entity";
import EntityLoaded from "./EntityLoaded";
import {RenderMaterial, SetEntityAsProperty, PushEntityOnProperty} from "./systems";


class Material extends React.Component {
    static contextTypes = {
        entityID: PropTypes.string,
        appState: PropTypes.object,
        actions: PropTypes.object,
        inMultiMaterial: PropTypes.bool,
        meshID: PropTypes.string
    }

    render() {
        const {entityID, inMultiMaterial, meshID} = this.context;
        const {children} = this.props;
        const id = inMultiMaterial ? meshID : entityID;

        return (
            <Entity>
                <RenderMaterial />
                <EntityLoaded>
                    {!inMultiMaterial ? (
                        <SetEntityAsProperty
                            targetEntityID={id}
                            propertyName="material"
                        />
                    ) : null}
                    {inMultiMaterial ? (
                        <PushEntityOnProperty
                            targetEntityID={entityID}
                            propertyName="subMaterials"
                        />
                    ) : null}
                    {children}
                </EntityLoaded>
            </Entity>
        );
    }
}

export default Material;
