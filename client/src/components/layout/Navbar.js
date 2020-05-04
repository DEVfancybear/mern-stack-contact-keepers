import React, {Fragment, useEffect} from 'react';
import {Link} from 'react-router-dom';

import {connect} from "react-redux";
import {clearContacts} from "../../actions/contacts";
import {logout, loadUser} from "../../actions/auth";

const Navbar = ({title, icon, loadUser, logout, clearContacts, auth_reducers: {isAuthenticated, user}}) => {
    useEffect(() => {
        loadUser();
        // eslint-disable-next-line
    }, []);

    const onLogout = () => {
        logout();
        clearContacts();
    };

    const authLinks = (
        <Fragment>
            <li>Hello {user && user.name}</li>
            <li>
                <a onClick={onLogout} href='#!'>
                    <i className='fas fa-sign-out-alt'/>{' '}
                    <span className='hide-sm'>Logout</span>
                </a>
            </li>
        </Fragment>
    );

    const guestLinks = (
        <Fragment>
            <li>
                <Link to='/register'>Register</Link>
            </li>
            <li>
                <Link to='/login'>Login</Link>
            </li>
        </Fragment>
    );

    return (
        <div className='navbar bg-primary'>
            <h1>
                <Link to='/'>
                    <i className={icon}/> {title}
                </Link>
            </h1>
            <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
        </div>
    );
};

Navbar.defaultProps = {
    title: 'Contact Keeper',
    icon: 'fas fa-id-card-alt'
};

const mapStateToProps = state => {
    return {
        auth_reducers: state.auth_reducers
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        clearContacts: () => {
            dispatch(clearContacts())
        },
        logout: () => {
            dispatch(logout())
        },
        loadUser: () => {
            dispatch(loadUser())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);