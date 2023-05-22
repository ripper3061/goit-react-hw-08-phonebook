import {
  ListOfContacts,
  ListItem,
  ItemText,
  DeleteButton,
} from './ContactList.styled';
import { useGetContactsQuery } from 'redux/phonebookApi';

export const ContactsList = () => {
  // const dispatch = useDispatch();
  // const contactsList = useSelector(getFilteredContacts);
  const { data, isLoading, error } = useGetContactsQuery;
  console.log(data);

  // const handledDeleteContact = contactId => {
  //   dispatch(deleteContact(contactId));
  // };

  return (
    <ListOfContacts>
      {data.map(({ id, name, phone }) => (
        <ListItem key={id}>
          <ItemText>
            {name}: {phone}
          </ItemText>
          <DeleteButton>Delete</DeleteButton>
        </ListItem>
      ))}
    </ListOfContacts>
  );
};
