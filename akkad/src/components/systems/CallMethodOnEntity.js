import {PropTypes} from "react";
import AbstractSystemComponent from "../AbstractSystemComponent";

class CallMethodOnEntity extends AbstractSystemComponent {
    static contextTypes = {
        entityID: PropTypes.string.isRequired,
        appState: PropTypes.object,
        actions: PropTypes.object
    }

    static propTypes = {
        targetEntityID: PropTypes.string,
        methodName: PropTypes.string.isRequired,
        args: PropTypes.arrayOf(PropTypes.any)
    }

    componentDidMount() {
        const {entityID, appState} = this.context;
        const {targetEntityID, methodName, args} = this.props;

        const entity = appState.getIn(["entities", (targetEntityID || entityID), "entity"]);

        if (args) {
            entity[methodName](...args);
        } else {
            entity[methodName]();
        }
    }
}

export default CallMethodOnEntity;
