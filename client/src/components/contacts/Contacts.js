import React, {Fragment, useEffect} from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import ContactItem from './ContactItem';
import Spinner from '../layout/Spinner';
import {connect} from "react-redux";
import {getContacts} from "../../actions/contacts";

const Contacts = ({getContacts, contacts_reducers: {contacts, filtered, loading}}) => {


    useEffect(() => {
        getContacts();
        // eslint-disable-next-line
    }, []);

    if (contacts !== null && contacts.length === 0 && !loading) {
        return <h4>Please add a contact</h4>;
    }

    return (
        <Fragment>
            {contacts !== null && !loading ? (
                <TransitionGroup>
                    {filtered !== null
                        ? filtered.map(contact => (
                            <CSSTransition
                                key={contact._id}
                                timeout={500}
                                classNames='item'
                            >
                                <ContactItem contact={contact}/>
                            </CSSTransition>
                        ))
                        : contacts.map(contact => (
                            <CSSTransition
                                key={contact._id}
                                timeout={500}
                                classNames='item'
                            >
                                <ContactItem contact={contact}/>
                            </CSSTransition>
                        ))}
                </TransitionGroup>
            ) : (
                <Spinner/>
            )}
        </Fragment>
    );
};
const mapStateToProps = state => {
    return {
        contacts_reducers: state.contacts_reducers
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getContacts: () => {
            dispatch(getContacts())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Contacts);