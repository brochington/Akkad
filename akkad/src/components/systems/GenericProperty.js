import {PropTypes} from "react";
import AkkadAbstractComponent from "../AkkadAbstractComponent";

class GenericProperty extends AkkadAbstractComponent {
    static contextTypes = {
        entityID: PropTypes.string,
        appState: PropTypes.object,
        actions: PropTypes.object
    }

    static propTypes = {
        propertyName: PropTypes.string.isRequired,
        onVal: PropTypes.any.isRequired,
        offVal: PropTypes.any
    }

    shouldComponentUpdate(nextProps) {
        if (
            nextProps.onVal !== this.props.onVal ||
            nextProps.offVal !== this.props.offVal
        ) {
            return true;
        }

        return false;
    }

    updatePropertyValue = (val) => {
        const {appState, entityID} = this.context;
        const {propertyName} = this.props;

        const entity = appState.getIn(["entities", entityID, "entity"]);
        
        entity[propertyName] = val;
    }

    componentWillMount() {
        const {onVal} = this.props;

        this.updatePropertyValue(onVal);
    }

    componentWillUpdate() {
        const {onVal} = this.props;

        this.updatePropertyValue(onVal);
    }

    componentWillUnmount() {
        const {offVal} = this.props;

        this.updatePropertyValue(offVal);
    }
}

export default GenericProperty;
