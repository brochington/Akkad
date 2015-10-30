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
        onClick: PropTypes.func,
        onKeyUp: PropTypes.func,
        onKeyDown: PropTypes.func,
        onEveryFrame: PropTypes.func,
        onMouseOver: PropTypes.func,
        onMouseOut: PropTypes.func
    }

    render() {
        const {entityID} = this.context;
        const {children} = this.props;
        return (
            <Entity>
                <RenderTrigger 
                    targetEntityID={entityID}
                    triggers={this.props}
                />
                <EntityLoaded>
                    {children}
                </EntityLoaded>
            </Entity>
        );
    }
}

export default Trigger;