import React, {useState, useEffect} from 'react';
import {setAlert} from "../../actions/alert";
import {connect} from "react-redux";

const Register = ({auth_reducers: {register, error, clearErrors, isAuthenticated}, history,setAlert}) => {

    useEffect(() => {
        if (isAuthenticated) {
            history.push('/');
        }

        if (error === 'User already exists') {
            setAlert(error, 'danger');
            clearErrors();
        }
        // eslint-disable-next-line
    }, [error, isAuthenticated, history]);

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const {name, email, password, password2} = user;

    const onChange = e => setUser({...user, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();
        if (name === '' || email === '' || password === '') {
            setAlert('Please enter all fields', 'danger');
        } else if (password !== password2) {
            setAlert('Passwords do not match', 'danger');
        } else {
            register({
                name,
                email,
                password
            });
        }
    };

    return (
        <div className='form-container'>
            <h1>
                Account <span className='text-primary'>Register</span>
            </h1>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label htmlFor='name'>Name</label>
                    <input
                        id='name'
                        type='text'
                        name='name'
                        value={name}
                        onChange={onChange}
                        required
                    />
                </div>
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
                        minLength='6'
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='password2'>Confirm Password</label>
                    <input
                        id='password2'
                        type='password'
                        name='password2'
                        value={password2}
                        onChange={onChange}
                        required
                        minLength='6'
                    />
                </div>
                <input
                    type='submit'
                    value='Register'
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
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Register);