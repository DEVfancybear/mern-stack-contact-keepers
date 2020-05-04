import React from 'react';
import {connect} from "react-redux";

const Alerts = ({alert_reducers: {alerts}}) => {

    return (
        alerts.length > 0 &&
        alerts.map(alert => (
            <div key={alert.id} className={`alert alert-${alert.type}`}>
                <i className='fas fa-info-circle'/> {alert.msg}
            </div>
        ))
    );
};

const mapStateToProps = state => {
    return {
        alert_reducers: state.alert_reducers
    }
}

export default connect(mapStateToProps, null)(Alerts);