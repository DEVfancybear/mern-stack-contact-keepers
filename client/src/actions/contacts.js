import * as types from "../constants/ActionTypes";
import axios from "axios";
// Get Contacts
export const getContacts = () => {
    return async dispatch => {
        try {
            const res = await axios.get('/api/contacts');
            const data = await res.data;
            dispatch({
                type: types.GET_CONTACTS,
                payload: data
            });
        } catch (err) {
            dispatch({
                type: types.CONTACT_ERROR,
                payload: err.response.msg
            });
        }
    }
};

// Add Contact
export const addContact = contact => {
    return async dispatch => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            const res = await axios.post('/api/contacts', contact, config);
            const data = await res.data;
            dispatch({
                type: types.ADD_CONTACT,
                payload: data
            });
        } catch (err) {
            dispatch({
                type: types.CONTACT_ERROR,
                payload: err.response.msg
            });
        }
    }
};

// Delete Contact
export const deleteContact = id => {
    return async dispatch => {
        try {
            await axios.delete(`/api/contacts/${id}`);
            dispatch({
                type: types.DELETE_CONTACT,
                payload: id
            });
        } catch (err) {
            dispatch({
                type: types.CONTACT_ERROR,
                payload: err.response.msg
            });
        }
    }
};

// Update Contact
export const updateContact = contact => {
    return async dispatch => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            const res = await axios.put(
                `/api/contacts/${contact._id}`,
                contact,
                config
            );
            const data = await res.data;
            dispatch({
                type: types.UPDATE_CONTACT,
                payload: data
            });
        } catch (err) {
            dispatch({
                type: types.CONTACT_ERROR,
                payload: err.response.msg
            });
        }
    }
};

// Clear Contacts
export const clearContacts = () => {
    return dispatch => {
        dispatch({type: types.CLEAR_CONTACTS});
    }
};

// Set Current Contact
export const setCurrent = contact => {
    return dispatch => {
        dispatch({type: types.SET_CURRENT, payload: contact});
    }
};

// Clear Current Contact

export const clearCurrent = () => {
    return dispatch => {
        dispatch({type: types.CLEAR_CURRENT});
    }
};

// Filter Contacts
export const filterContacts = text => {
    return dispatch => {
        dispatch({type: types.FILTER_CONTACTS, payload: text});
    }
};

// Clear Filter
export const clearFilter = () => {
    return dispatch => {
        dispatch({type: types.CLEAR_FILTER});
    }
};