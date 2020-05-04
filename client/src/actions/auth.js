import * as types from "../constants/ActionTypes";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
// Load User
export const loadUser = () => {
    return async dispatch => {
        setAuthToken(localStorage.token);

        try {
            const res = await axios.get('/api/auth');
            const data = await res.data;
            dispatch({
                type: types.USER_LOADED,
                payload: data
            });
        } catch (err) {
            dispatch({type: types.AUTH_ERROR});
        }
    }
};

// Register User
export const register = formData => {
    return async dispatch => {
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

            dispatch(loadUser());
        } catch (err) {
            dispatch({
                type: types.REGISTER_FAIL,
                payload: err.response.data.msg
            });
        }
    }
};

// Login User
export const login = formData => {
    return async dispatch => {
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

            dispatch(loadUser());
        } catch (err) {
            dispatch({
                type: types.LOGIN_FAIL,
                payload: err.response.data.msg
            });
        }
    }
};

// Logout

export const logout = () => {
    return dispatch => {
        dispatch({
            type: types.LOGOUT
        })
    }
}

// Clear Errors
export const clearErrors = () => {
    return dispatch => {
        dispatch({
            type: types.CLEAR_ERRORS
        })
    }
}