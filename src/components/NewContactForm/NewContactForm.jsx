import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

import { Label, Input, ErrorText } from './NewContactForm.styled';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Button } from 'components/Button/Button';

const INITIAL_VALUES = {
  name: '',
  number: '',
};

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Name should be at least 2 characters')
    .max(40, 'Name should be at most 40 characters')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('Name is required'),
  number: yup
    .string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Number is required'),
});

class NewContactForm extends Component {
  handleSubmit = (values, actions) => {
    const { resetForm } = actions;

    if (this.isInPhoneBook(values.name)) {
      Notify.warning(`${values.name.toUpperCase()} is already in CONTACTS`);
      return;
    }

    this.props.onSubmit({ ...values });
    document.querySelector('[name="name"]').focus();
    resetForm();
  };

  isInPhoneBook(name) {
    const { contacts } = this.props;
    const normalizedName = name.toLowerCase();
    return contacts.find(({ name }) => name.toLowerCase() === normalizedName);
  }

  render() {
    return (
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={this.handleSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <Label>
            Name
            <Field type="text" name="name" required>
              {({ field, meta: { touched, error } }) => (
                <Input
                  placeholder="Full name"
                  border={touched && error ? 'red' : 'btnColor'}
                  backgroundColor={touched && error ? 'bgErrorColor' : ''}
                  {...field}
                />
              )}
            </Field>
            <ErrorMessage name="name" component={ErrorText} />
          </Label>
          <Label>
            Number
            <Field type="tel" name="number" required>
              {({ field, meta: { touched, error } }) => (
                <Input
                  placeholder="Phone number"
                  border={touched && error ? 'red' : 'btnColor'}
                  backgroundColor={touched && error ? 'bgErrorColor' : ''}
                  {...field}
                />
              )}
            </Field>
            <ErrorMessage name="number" component={ErrorText} />
          </Label>
          <Button type="submit" name="primary">
            Add Contact
          </Button>
        </Form>
      </Formik>
    );
  }
}

NewContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ),
  onSubmit: PropTypes.func.isRequired,
};

export default NewContactForm;

/* 
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
*/
