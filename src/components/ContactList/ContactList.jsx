import { useSelector, useDispatch } from 'react-redux';
import {
  ListOfContacts,
  ListItem,
  ItemText,
  DeleteButton,
} from './ContactList.styled';
import { HendleLoader } from 'components/Loader/Loader';
import {
  selectDeleteLoading,
  selectFilteredContacts,
} from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';
import { useState } from 'react';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contactsList = useSelector(selectFilteredContacts);
  const deleteLoading = useSelector(selectDeleteLoading);
  const [deleteContactId, setDeleteContactId] = useState('');

  const handledDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
    setDeleteContactId(contactId);
  };

  return (
    <ListOfContacts>
      {contactsList.map(({ id, name, number }) => (
        <ListItem key={id}>
          <ItemText>
            {name}: {number}
          </ItemText>
          <DeleteButton onClick={() => handledDeleteContact(id)}>
            Delete
            {deleteLoading && deleteContactId === id && <HendleLoader />}
          </DeleteButton>
        </ListItem>
      ))}
    </ListOfContacts>
  );
};
