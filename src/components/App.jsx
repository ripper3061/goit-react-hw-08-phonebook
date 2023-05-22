// import { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { getContacts, getIsLoading } from 'redux/selectors';
// import { fetchContacts } from 'redux/operations';
import { Section } from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import { ContactsList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Loader } from './Loader/Loader';
import { AppSection } from './App.styled';
import { useGetContactsQuery } from 'redux/phonebookApi';

export default function App() {
  // const dispatch = useDispatch();
  // const contacts = useSelector(getContacts);
  // const isLoading = useSelector(getIsLoading);

  const { data, isLoading, error } = useGetContactsQuery;
  console.log(data);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <>
      <div>COCOCOCOC</div>
    </>
    // <AppSection>
    //   <Section title="Phonebook">
    //     <ContactForm />
    //   </Section>

    //   <Section title="Contacts">
    //     {contacts.length > 0 && (
    //       <>
    //         <Filter />
    //         <ContactsList />
    //       </>
    //     )}
    //     {!isLoading && contacts.length === 0 && <p>There is no contacts</p>}
    //     <Loader />
    //   </Section>
    // </AppSection>
  );
}
