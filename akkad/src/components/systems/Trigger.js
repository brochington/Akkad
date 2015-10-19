import React, {PropTypes} from "react";
import Entity from "../Entity";
import EntityLoaded from "../EntityLoaded";
import RenderTrigger from "./RenderTrigger";


class Trigger extends React.Component {
    static contextTypes = {
        entityID: PropTypes.string,
        appState: PropTypes.object, 
        actions: PropTypes.object
    }

    static propTypes = {
        onClick: PropTypes.func
    }

    render() {
        const {entityID} = this.context;
        return (
            <Entity>
                <RenderTrigger 
                    targetEntityID={entityID}
                    triggers={this.props}
                />
                <EntityLoaded>
                </EntityLoaded>
            </Entity>
        );
    }
}

export default Trigger;