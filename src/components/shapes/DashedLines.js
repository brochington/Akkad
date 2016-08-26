import React, {PropTypes} from "react";
import Entity from "../Entity";
import EntityLoaded from "../EntityLoaded";
import {RenderShape} from "../systems";

class DashedLines extends React.Component {
    static propTypes = {
        vectors: PropTypes.arrayOf(PropTypes.array),
        dashSize: PropTypes.number,
        gapSize: PropTypes.number,
        dashNumber: PropTypes.number
    };

    render() {
        const {
            vectors = [],
            dashSize = null,
            gapSize = null,
            dashNumber = null,
            children
        } = this.props;

        return (
            <Entity>
                <RenderShape
                    type="dashedLines"
                    vectors={vectors}
                    dashSize={dashSize}
                    gapSize={gapSize}
                    dashNumber={dashNumber}
                />
                <EntityLoaded>
                    {children}
                </EntityLoaded>
            </Entity>
        );
    }
}

export default DashedLines;
