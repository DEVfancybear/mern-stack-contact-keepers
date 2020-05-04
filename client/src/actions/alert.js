import * as types from "../constants/ActionTypes";
import {v4 as uuidv4} from 'uuid';
// Set Alert
export const setAlert = (msg, type, timeout = 5000) => {
    return dispatch => {
        const id = uuidv4();
        dispatch({
            type: types.SET_ALERT,
            payload: {msg, type, id},
        });

        setTimeout(() => dispatch({type: types.REMOVE_ALERT, payload: id}), timeout);
    }
};