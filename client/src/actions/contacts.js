import * as types from "../constants/ActionTypes";
import axios from "axios";
// Get Contacts
const getContacts = async () => {
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
};

// Add Contact
const addContact = async contact => {
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
};

// Delete Contact
const deleteContact = async id => {
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
};

// Update Contact
const updateContact = async contact => {
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
};

// Clear Contacts
const clearContacts = () => {
    dispatch({type: types.CLEAR_CONTACTS});
};

// Set Current Contact
const setCurrent = contact => {
    dispatch({type: types.SET_CURRENT, payload: contact});
};

// Clear Current Contact
const clearCurrent = () => {
    dispatch({type: types.CLEAR_CURRENT});
};

// Filter Contacts
const filterContacts = text => {
    dispatch({type: types.FILTER_CONTACTS, payload: text});
};

// Clear Filter
const clearFilter = () => {
    dispatch({type: types.CLEAR_FILTER});
};