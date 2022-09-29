import { Button } from 'components/Button/Button';
import React, { Component } from 'react';
import { Form } from './NewContactForm.styled';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class NewContactForm extends Component {
  state = { ...INITIAL_STATE };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    const { name } = event.target;
    event.preventDefault();

    if (this.isInPhoneBook(name.value)) {
      Notify.warning(`${name.value.toUpperCase()} is already in CONTACTS`);
      return;
    }

    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  isInPhoneBook(name) {
    const { contacts } = this.props;
    const normalizedName = name.toLowerCase();
    return contacts.find(({ name }) => name.toLowerCase() === normalizedName);
  }

  reset() {
    this.setState({ ...INITIAL_STATE });
  }

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <Button type="submit">Add Contact</Button>
      </Form>
    );
  }
}

export default NewContactForm;
