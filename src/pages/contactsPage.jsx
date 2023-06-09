import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectIsLoading } from '../redux/contacts/selectors';
import { fetchContacts } from '../redux/contacts/operations';
import { Section } from '../components/Section/Section';
import ContactForm from '../components/ContactForm/ContactForm';
import { ContactsList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import { Loader } from '../components/Loader/Loader';
import { AppSection } from '../components/App.styled';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <AppSection>
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      <Section title="Contacts">
        {contacts.length > 0 && (
          <>
            <Filter />
            <ContactsList />
          </>
        )}
        {!isLoading && contacts.length === 0 && <p>There is no contacts</p>}
        <Loader />
      </Section>
    </AppSection>
  );
}
