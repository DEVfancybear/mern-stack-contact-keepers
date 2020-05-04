import * as types from "../constants/ActionTypes";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
// Load User
const loadUser = async () => {
    setAuthToken(localStorage.token);

    try {
        const res = await axios.get('/api/auth');
        const data = await res.data;
        dispatch({
            type: types.USER_LOADED,
            payload: data
        });
    } catch (err) {
        dispatch({ type: types.AUTH_ERROR });
    }
};

// Register User
const register = async formData => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        const res = await axios.post('/api/users', formData, config);
        const data = await res.data;
        dispatch({
            type: types.REGISTER_SUCCESS,
            payload: data
        });

        await loadUser();
    } catch (err) {
        dispatch({
            type: types.REGISTER_FAIL,
            payload: err.response.data.msg
        });
    }
};

// Login User
const login = async formData => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        const res = await axios.post('/api/auth', formData, config);
        const data = await res.data;
        dispatch({
            type: types.LOGIN_SUCCESS,
            payload: data
        });

        await loadUser();
    } catch (err) {
        dispatch({
            type: types.LOGIN_FAIL,
            payload: err.response.data.msg
        });
    }
};

// Logout
const logout = () => dispatch({ type: types.LOGOUT });

// Clear Errors
const clearErrors = () => dispatch({ type: types.CLEAR_ERRORS });