import PropTypes from 'prop-types';
import { Button } from 'components/Button/Button';
import { ContactStyled } from './Contact.styled';
import { Box } from 'components/Box';

export const Contact = ({ name, number, onDeleteContact, id }) => (
  <ContactStyled>
    <Box pr={[2]} display={['block', 'flex']}>
      <p>{name}:</p>
      <p>{number}</p>
    </Box>
    <Button onClick={() => onDeleteContact(id)}>Delete</Button>
  </ContactStyled>
);

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
