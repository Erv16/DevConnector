import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// The Alert component receives the state

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => (
    // If alerts has something inside of it,
    // output a div with the message and the styling based on the alert type
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

// Mapping state to props
// Getting the alert state
// Putting it inside a prop of alerts
const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
