import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import { Box } from 'components/Box/Box';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { NewContactForm } from 'components/NewContactForm/NewContactForm';
import { Section } from '../Section/Section';
import { Title } from './App.styled';

// const initialState = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

const LOCAL_STORAGE_KEY = {
  contacts: 'contacts',
};

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contactsFromLocalStorage = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY.contacts)
    );
    if (contactsFromLocalStorage)
      this.setState({ contacts: contactsFromLocalStorage });
  }

  componentDidUpdate(_, prevState) {
    const prevContacts = prevState.contacts;
    const updatedContacts = this.state.contacts;

    if (prevContacts !== updatedContacts) {
      localStorage.setItem(
        LOCAL_STORAGE_KEY.contacts,
        JSON.stringify(updatedContacts)
      );
    }
  }

  addContact = ({ name, number }) => {
    const contact = {
      name,
      number,
      id: nanoid().slice(0, 8),
    };

    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
    toast.success(`${name.toUpperCase()} successfully added to CONTACTS`);
  };

  deleteContact = idToDelete => {
    const { contacts } = this.state;
    const contactToDelete = contacts.find(({ id }) => id === idToDelete);

    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== idToDelete),
    }));
    toast.info(`${contactToDelete.name.toUpperCase()} deleted from CONTACTS`);
  };

  changeFilter = event => {
    this.setState({ filter: event.target.value });
  };

  getFilteredContacts() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }

  render() {
    const { contacts, filter } = this.state;

    return (
      <Box as="main" bg="mainBackgroundColor">
        <Title>PhoneBook</Title>
        <Section title="Create new contact">
          <NewContactForm onSubmit={this.addContact} contacts={contacts} />
        </Section>
        <Section title="Contacts">
          {contacts.length > 0 && (
            <Filter value={filter} onChange={this.changeFilter} />
          )}
          <ContactList
            contacts={this.getFilteredContacts()}
            onDeleteContact={this.deleteContact}
          />
        </Section>
        <ToastContainer autoClose={3000} theme="colored" />
      </Box>
    );
  }
}

export default App;
