import React, {PropTypes} from "react";
import Entity from "./Entity";
import EntityLoaded from "./EntityLoaded";
import {RenderParticles, CallMethodOnEntity} from "./systems";

class Particles extends React.Component {
    static contextTypes = {
        entityID: PropTypes.string,
        appState: PropTypes.object,
        actions: PropTypes.object
    }

    static propTypes = {
        img: PropTypes.string
    }

    render() {
        const {entityID} = this.context;
        const {img, children} = this.props;

        return (
            <Entity>
                <RenderParticles
                    targetEntityID={entityID}
                    img={img}
                />
                <EntityLoaded>
                    <CallMethodOnEntity
                        methodName="start"
                    />
                    {children}
                </EntityLoaded>
            </Entity>
        );
    }
}

export default Particles;
