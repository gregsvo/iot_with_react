import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Panel } from 'react-bootstrap';


class CardDetail extends Component {
    render() {
        const { title, value, units } = this.props;
        return (
            <div data-test-component="cardDetail">
                <Panel header={title}>
                    <div>
                        <h2>{value} {units}</h2>
                    </div>
                </Panel>
            </div>
        );
    }
}

CardDetail.propTypes = {
    title: PropTypes.string,
    value: PropTypes.string,
    units: PropTypes.string
};

export default CardDetail;
