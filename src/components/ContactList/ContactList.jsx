import React from 'react';
import './ContactList.scss';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

const ContactList = () => {
  // *******************************************************
  const listContacts = useSelector(state => state.contacts.contacts);
  const filterData = useSelector(state => state.filters);
  console.log('filterData: ', filterData);
  console.log('listContacts: ', listContacts);

  const dispatch = useDispatch();
  const removeContact = id => dispatch(deleteContact(id));
  // *******************************************************
  function filteredContacts(contacts, filter) {
    return !filter
      ? contacts
      : contacts.filter(contact => contact.name.toLowerCase().includes(filter)); // повертає новий масив
  }

  const newListContacts = filteredContacts(listContacts, filterData);
  console.log('newListContacts: ', newListContacts);
  return (
    <div>
      <div className="contactsContainer">
        <h2>Contacts</h2>
        <ul className="contactsList">
          {newListContacts.map(contact => (
            <li key={contact.id}>
              <div className="container-content">
                Name:
                <span className="content"> {contact.name}</span>
                Phone:
                <span className="content"> {contact.number}</span>
                <button
                  className="conformButton"
                  type="button"
                  onClick={() => removeContact(contact.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactList;
