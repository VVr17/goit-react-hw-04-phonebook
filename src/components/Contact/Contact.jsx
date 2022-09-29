import { Button } from 'components/Button/Button';
import PropTypes from 'prop-types';
import { ContactStyled } from './Contact.styled';

export const Contact = ({ name, number, onDeleteContact, id }) => (
  <ContactStyled>
    <p>
      {name}: {number}
    </p>
    <Button onClick={() => onDeleteContact(id)}>Delete</Button>
  </ContactStyled>
);

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
