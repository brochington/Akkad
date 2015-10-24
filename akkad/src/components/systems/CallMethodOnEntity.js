import {PropTypes} from "react";
import AkkadAbstractComponent from "../AkkadAbstractComponent";

class CallMethodOnEntity extends AkkadAbstractComponent {
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