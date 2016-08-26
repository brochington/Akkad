import React, {PropTypes} from "react";
import {omit} from "lodash";
import Entity from "../Entity";
import EntityLoaded from "../EntityLoaded";
import {RenderShape} from "../systems";
import AkkadAbstractComponent from '../AkkadAbstractComponent';

class ShapeFactory extends AkkadAbstractComponent {
    static propTypes = {
        type: PropTypes.string.isRequired
    }

    render() {
        return (
            <Entity>
                <RenderShape
                    type={this.props.type}
                    {...omit(this.props, ['children'])}
                />
                <EntityLoaded>
                    {this.props.children}
                </EntityLoaded>
            </Entity>
        );
    }
}

export default ShapeFactory;
