import React, {PropTypes} from "react";
import Babylon from "babylonjs";


/* Sets an Entity as the property on another entity */
class SetEntityAsProperty extends React.Component {
    static contextTypes = {
        entityID: PropTypes.string.isRequired,
        appState: PropTypes.object,
        actions: PropTypes.object
    }

    static propTypes = {
        targetEntityID: PropTypes.string,
        propertyName: PropTypes.string,
        reverse: PropTypes.bool
    }

    componentDidMount() {
        const {entityID, appState} = this.context;
        const {targetEntityID, propertyName, reverse} = this.props;
        const targetEntity = appState.getIn(["entities", targetEntityID, "entity"]);
        const entityToSet = appState.getIn(["entities", entityID, "entity"]);

        if (reverse) {
            entityToSet[propertyName] = targetEntity;
        } else {
            targetEntity[propertyName] = entityToSet;    
        }
    }

    componentWillUnmount() {
        const {entityID, appState} = this.context;
        const {propertyName, targetEntityID, reverse} = this.props;
        const targetEntity = appState.getIn(["entities", targetEntityID, "entity"]);
        const entityToSet = appState.getIn(["entities", entityID, "entity"]);

        if (reverse) {
            entityToSet[propertyName] = null;
        } else {
            targetEntity[propertyName] = null;    
        }
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default SetEntityAsProperty;