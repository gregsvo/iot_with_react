import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../../actions/index';
import { PropTypes} from 'prop-types';

class UpdateButton extends Component {
    render() {
        return (
            <button onClick={this.props.fetchData}>UPDATE DATA</button>
        );
    }
}

UpdateButton.propTypes = {
    fetchData: PropTypes.func
};

export default connect(null, {fetchData})(UpdateButton);
// null is the state, fetchData is the action, both bound together to UpdateButton
