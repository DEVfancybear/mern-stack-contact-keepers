import React from 'react';
import {connect} from "react-redux";
import {deleteContact, setCurrent, clearCurrent} from "../../actions/contacts";

const ContactItem = ({contact, deleteContact, setCurrent, clearCurrent}) => {

    const {_id, name, email, phone, type} = contact;

    const onDelete = () => {
        deleteContact(_id);
        clearCurrent();
    };

    return (
        <div className='card bg-light'>
            <h3 className='text-primary text-left'>
                {name}{' '}
                <span
                    style={{float: 'right'}}
                    className={
                        'badge ' +
                        (type === 'professional' ? 'badge-success' : 'badge-primary')
                    }
                >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
            </h3>
            <ul className='list'>
                {email && (
                    <li>
                        <i className='fas fa-envelope-open'/> {email}
                    </li>
                )}
                {phone && (
                    <li>
                        <i className='fas fa-phone'/> {phone}
                    </li>
                )}
            </ul>
            <p>
                <button
                    className='btn btn-dark btn-sm'
                    onClick={() => setCurrent(contact)}
                >
                    Edit
                </button>
                <button className='btn btn-danger btn-sm' onClick={onDelete}>
                    Delete
                </button>
            </p>
        </div>
    );
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        deleteContact: (id) => {
            dispatch(deleteContact(id))
        },
        setCurrent: contact => {
            dispatch(setCurrent(contact))
        },
        clearCurrent: () => {
            dispatch(clearCurrent())
        }
    }
}

export default connect(null, mapDispatchToProps)(ContactItem);