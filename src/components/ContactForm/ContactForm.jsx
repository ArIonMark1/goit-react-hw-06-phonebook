import { useState } from 'react';
import './ContactForm.scss';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

export default function ContactForm() {
  //форма додавання контакту
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();
  const listContacts = useSelector(state => state.contacts);
  const formReset = () => {
    setName('');
    setPhone('');
  };

  function formSubmit(evt) {
    /* відправка даних контакту при сабміті, перевірка на співпадіння та пусте ім'я  */
    evt.preventDefault();
    const stateName = !name.trim() ? 'empty' : name.trim();

    const isExist = listContacts.find(
      contact => contact.name === name && contact.number === phone
    );
    if (isExist) {
      toast.error(`${name} already in contacts.`);
      formReset();
      return;
    }
    // *********************************************
    dispatch(addContact(stateName, phone));
    // *********************************************
    toast.success(`${name} added to contacts.`);
    formReset();
  }

  return (
    <form id="form" className="contactsForm" onSubmit={formSubmit}>
      <label className="nameLabel">
        Name
        <br />
        <input
          className="nameField"
          type="text"
          name="name"
          value={name}
          onChange={evt => setName(evt.currentTarget.value)}
          placeholder="Enter contact name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className="nameLabel">
        Number
        <br />
        <input
          className="nameField"
          type="tel"
          name="number"
          value={phone}
          onChange={evt => setPhone(evt.currentTarget.value)}
          placeholder="Enter your number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className="conformButton" type="submit">
        Add contact
      </button>
    </form>
  );
}
