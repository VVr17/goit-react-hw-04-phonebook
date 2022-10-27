import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import { Box } from 'components/Box/Box';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { NewContactForm } from 'components/NewContactForm/NewContactForm';
import { Section } from '../Section/Section';
import { Title } from './App.styled';

const LOCAL_STORAGE_KEY = {
  contacts: 'contacts',
};

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY.contacts)) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY.contacts, JSON.stringify(contacts));
  }, [contacts]);

  function addContact({ name, number }) {
    const contact = {
      name,
      number,
      id: nanoid().slice(0, 8),
    };

    setContacts(prevContacts => [...prevContacts, contact]);
    toast.success(`${name.toUpperCase()} successfully added to CONTACTS`);
  }

  function deleteContact(idToDelete) {
    const contactToDelete = contacts.find(({ id }) => id === idToDelete);

    setContacts(prevContacts =>
      prevContacts.filter(({ id }) => id !== idToDelete)
    );
    toast.info(`${contactToDelete.name.toUpperCase()} deleted from CONTACTS`);
  }

  function changeFilter(event) {
    setFilter(event.target.value);
  }

  function getFilteredContacts() {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }

  return (
    <Box as="main" bg="mainBackgroundColor">
      <Title>PhoneBook</Title>
      <Section title="Create new contact">
        <NewContactForm onFormSubmit={addContact} contacts={contacts} />
      </Section>
      <Section title="Contacts">
        {contacts.length > 0 && (
          <Filter value={filter} onChange={changeFilter} />
        )}
        <ContactList
          contacts={getFilteredContacts()}
          onDeleteContact={deleteContact}
        />
      </Section>
      <ToastContainer autoClose={3000} theme="colored" />
    </Box>
  );
};
