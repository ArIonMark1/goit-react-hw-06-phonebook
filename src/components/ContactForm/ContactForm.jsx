import './ContactForm.scss';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/actions';

export default function ContactForm() {
  //форма додавання контакту
  const dispatch = useDispatch();

  function formSubmit(evt) {
    evt.preventDefault();
    const form = evt.target;

    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const stateName = !name.trim() ? 'empty' : name.trim();

    // *********************************************
    dispatch(addContact(stateName, number));
    // *********************************************
    form.reset();
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
