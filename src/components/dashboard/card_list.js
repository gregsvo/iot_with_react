import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import CardDetail from './card_detail';
import { PropTypes } from 'prop-types';

class CardList extends Component {
    render(){
        return (
            <div data-test-component="cardList">
                <Row className="show-grid">
                    { this.renderAllCards() }
                </Row>
            </div>
        );
    }

    renderAllCards(){
        return this.props.iotData.map((dataSet, index) => {
            let { title, value, units } = dataSet;
            return (
                <Col lg={2} key={index}>
                    <CardDetail title={title} value={value} units={units} />
                </Col>
            );
        });
    }
}

function mapStateToProps(state) {
    return {
        iotData: state.iotData
    };
}

CardList.propTypes = {
    // iotData: PropTypes.arrayOf(PropTypes.objWithShape(PropTypes.str))
    iotData: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.str,
            value: PropTypes.str,
            units: PropTypes.str
        })
    )
};

export default connect(mapStateToProps, null)(CardList);
// connect is returning a function: The argument is the CardList class, and that function,
// (anomymous function) which is called with export default, returns CardList again, but with
// state (the first null), and any necessary actions (the second null).
