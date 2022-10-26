import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { Button } from 'components/Button/Button';
import { Label } from './Label/Label';

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

export const NewContactForm = ({ contacts, onSubmit }) => {
  function handleSubmit(values, actions) {
    const { resetForm } = actions;

    if (isInPhoneBook(values.name)) {
      toast.warn(`${values.name.toUpperCase()} is already in CONTACTS`);
      return;
    }

    onSubmit({ ...values });
    document.querySelector('[name="name"]').focus();
    resetForm();
  }

  function isInPhoneBook(name) {
    const normalizedName = name.toLowerCase();
    return contacts.find(({ name }) => name.toLowerCase() === normalizedName);
  }

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <Label name="name" placeholder="Full name" />
        <Label type="tel" name="number" placeholder="Phone number" />
        <Button type="submit" name="primary">
          Add Contact
        </Button>
      </Form>
    </Formik>
  );
};

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
