import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Box } from 'components/Box/Box';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { NewContactForm } from 'components/NewContactForm/NewContactForm';
import { Section } from '../Section/Section';
import { Title } from './App.styled';

const sample = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

class App extends Component {
  state = {
    contacts: [...sample],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      name,
      number,
      id: nanoid().slice(0, 8),
    };

    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));

    Notify.success(`${name.toUpperCase()} successfully added to CONTACTS`);
  };

  deleteContact = idToDelete => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== idToDelete),
    }));
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
      </Box>
    );
  }
}

export default App;
