import {PropTypes} from "react";
import AkkadAbstractComponent from "../AkkadAbstractComponent";

/* Sets an Entity as the property on another entity */
class SetEntityAsProperty extends AkkadAbstractComponent {
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

        targetEntity[propertyName] = entityToSet;
    }

    componentWillUnmount() {
        const {appState} = this.context;
        const {propertyName, targetEntityID} = this.props;
        const targetEntity = appState.getIn(["entities", targetEntityID, "entity"]);

        targetEntity[propertyName] = null;
    }
}

export default SetEntityAsProperty;