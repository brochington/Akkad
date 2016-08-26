import {PropTypes} from "react";
import AkkadAbstractComponent from "./AkkadAbstractComponent";

class Entity extends AkkadAbstractComponent {
    static propTypes = {
        /* add other key/values to be passed on context. */
        altContextTypes: PropTypes.object,
        /* Add other context props that will have this entities ID */
        altEntityNames: PropTypes.arrayOf(PropTypes.string)
    }

    static defaultProps = {
        altContextTypes: {},
        altEntityNames: []
    }

    static childContextTypes = {
        entityID: PropTypes.string,
        meshID: PropTypes.string
    }

    getChildContext() {
        const {altContextTypes} = this.props;

        let childContext = {
            entityID: this.id
        };

        for (let contextProp in altContextTypes) {
            childContext[contextProp] = altContextTypes[contextProp];
        }

        return childContext;
        // return this.props.altContextTypes.reduce((acc, ct) => {
        //     const contextTypes = Object.keys()
        //     acc[ct] = this.id;
        //     return acc;
        // }, {entityID: this.id});
    }
}

export default Entity;
