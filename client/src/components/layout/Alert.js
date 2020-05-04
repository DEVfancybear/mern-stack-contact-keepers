import React from 'react';
import {connect} from "react-redux";

const Alert = ({alert_reducers}) => {

    return (
        alert_reducers.length > 0 &&
        alert_reducers.map(alert => (
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

export default connect(mapStateToProps, null)(Alert);