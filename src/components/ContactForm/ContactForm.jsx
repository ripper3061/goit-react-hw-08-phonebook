import { useState } from 'react';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import { useSelector, useDispatch } from 'react-redux';

import { ContactsForm, AddButton } from './ContactForm.styled';
import { HendleLoader } from 'components/Loader/Loader';
import { selectAddLoading, selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const contacts = useSelector(selectContacts);
  const addLoading = useSelector(selectAddLoading);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (checkContactsName(contacts, name)) {
      Notiflix.Notify.warning(`${name} is already in contacts`);
      return;
    }
    dispatch(addContact({ name, number }));
    resetContactForm();
  };

  const checkContactsName = (contacts, newContactName) => {
    const normalizedName = newContactName.toLowerCase();
    return contacts.some(({ name }) => normalizedName === name.toLowerCase());
  };

  const resetContactForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <ContactsForm onSubmit={handleSubmit}>
      <label htmlFor={nameInputId}>Name</label>
      <input
        type="text"
        name="name"
        id={nameInputId}
        value={name}
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <label htmlFor={numberInputId}>Number</label>
      <input
        type="tel"
        name="number"
        value={number}
        id={numberInputId}
        onChange={handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <AddButton type="submit">
        Add contact
        {addLoading && <HendleLoader />}
      </AddButton>
    </ContactsForm>
  );
}
