import React, {PropTypes} from "react";

/*
pushes an entity on an array at the property name
target[propertyName].push(entity)
*/
class PushEntityOnProperty extends React.Component {
    static contextTypes = {
        entityID: PropTypes.string.isRequired,
        appState: PropTypes.object,
        actions: PropTypes.object
    }

    static propTypes = {
        targetEntityID: PropTypes.string,
        propertyName: PropTypes.string
    }

    componentDidMount() {
        const {entityID, appState} = this.context;
        const {targetEntityID, propertyName} = this.props;
        const targetEntity = appState.getIn(["entities", targetEntityID, "entity"]);
        const entityToSet = appState.getIn(["entities", entityID, "entity"]);

        entityToSet._pushEntityIdentifier = entityID;

        targetEntity[propertyName].push(entityToSet);
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default PushEntityOnProperty;
