import PropTypes from 'prop-types';
import { Contact } from 'components/Contact/Contact';
import { Contacts, Text } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return contacts.length ? (
    <Contacts>
      {contacts.map(({ name, number, id }) => (
        <Contact
          key={id}
          name={name}
          number={number}
          id={id}
          onDeleteContact={onDeleteContact}
        />
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
};
