import * as types from "../constants/ActionTypes";
// Set Alert
const setAlert = (msg, type, timeout = 5000) => {
    const id = uuidv4();
    dispatch({
        type: types.SET_ALERT,
        payload: {msg, type, id},
    });

    setTimeout(() => dispatch({type: types.REMOVE_ALERT, payload: id}), timeout);
};