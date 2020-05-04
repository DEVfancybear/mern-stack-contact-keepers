import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import {setAlert} from "../../actions/alert";
import {login, clearErrors} from "../../actions/auth";

const Login = ({auth_reducers: {error, isAuthenticated}, history, setAlert, login, clearErrors}) => {

    useEffect(() => {
        if (isAuthenticated) {
            history.push('/');
        }

        if (error === 'Invalid Credentials') {
            setAlert(error, 'danger');
            clearErrors();
        }
        // eslint-disable-next-line
    }, [error, isAuthenticated, history]);

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const {email, password} = user;

    const onChange = e => setUser({...user, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();
        if (email === '' || password === '') {
            setAlert('Please fill in all fields', 'danger');
        } else {
            login({
                email,
                password
            });
        }
    };

    return (
        <div className='form-container'>
            <h1>
                Account <span className='text-primary'>Login</span>
            </h1>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label htmlFor='email'>Email Address</label>
                    <input
                        id='email'
                        type='email'
                        name='email'
                        value={email}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input
                        id='password'
                        type='password'
                        name='password'
                        value={password}
                        onChange={onChange}
                        required
                    />
                </div>
                <input
                    type='submit'
                    value='Login'
                    className='btn btn-primary btn-block'
                />
            </form>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        auth_reducers: state.auth_reducers
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        setAlert: (msg, type, timeout) => {
            dispatch(setAlert(msg, type, timeout))
        },
        login: formData => {
            dispatch(login(formData))
        },
        clearErrors: () => {
            dispatch(clearErrors())
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);