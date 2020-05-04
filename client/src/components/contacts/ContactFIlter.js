import React, {useRef, useEffect} from 'react';
import {connect} from "react-redux";
import {filterContacts, clearFilter} from "../../actions/contacts";

const ContactFilter = ({contacts_reducers: {filtered}, filterContacts, clearFilter}) => {
    const text = useRef('');


    useEffect(() => {
        if (filtered === null) {
            text.current.value = '';
        }
    });

    const onChange = e => {
        if (text.current.value !== '') {
            filterContacts(e.target.value);
        } else {
            clearFilter();
        }
    };

    return (
        <form>
            <input
                ref={text}
                type='text'
                placeholder='Filter Contacts...'
                onChange={onChange}
            />
        </form>
    );
};

const mapStateToProps = state => {
    return {
        contacts_reducers: state.contacts_reducers
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        filterContacts: text => {
            dispatch(filterContacts(text))
        },
        clearFilter: () => {
            dispatch(clearFilter())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactFilter);