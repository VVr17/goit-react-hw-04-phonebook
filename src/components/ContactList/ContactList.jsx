import PropTypes from 'prop-types';
import { Contact } from '../Contact/Contact';
import { Contacts, Text } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return contacts.length ? (
    <Contacts>
      {contacts.map(({ name, number, id }) => (
        <li key={id}>
          <Contact
            name={name}
            number={number}
            onDelete={() => onDeleteContact(id)}
          />
        </li>
      ))}
    </Contacts>
  ) : (
    <Text>There are no contacts</Text>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
