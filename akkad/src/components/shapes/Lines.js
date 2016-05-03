import React, {PropTypes} from "react";
import Entity from "../Entity";
import EntityLoaded from "../EntityLoaded";
import {RenderShape} from "../systems";

class Lines extends React.Component {
    static propTypes = {
        vectors: PropTypes.arrayOf(PropTypes.array)
    };

    render() {
        const {vectors = [], children} = this.props;
        return (
            <Entity>
                <RenderShape
                    type="lines"
                    vectors={vectors}
                />
                <EntityLoaded>
                    {children}
                </EntityLoaded>
            </Entity>
        );
    }
}

export default Lines;
