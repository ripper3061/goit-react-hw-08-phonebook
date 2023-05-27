import { useSelector, useDispatch } from 'react-redux';
import { selectDeleteLoading, selectFilteredContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';
import {
  ListOfContacts,
  ListItem,
  ItemText,
  DeleteButton,
} from './ContactList.styled';
import { HendleLoader } from 'components/Loader/Loader';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contactsList = useSelector(selectFilteredContacts);
  const deleteLoading = useSelector(selectDeleteLoading);

  const handledDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
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
            {deleteLoading && <HendleLoader />}
          </DeleteButton>
        </ListItem>
      ))}
    </ListOfContacts>
  );
};
