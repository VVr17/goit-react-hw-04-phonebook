import PropTypes from 'prop-types';
import { Box } from 'components/Box/Box';
import { Button } from '../Button/Button';
import { ContactStyled } from './Contact.styled';

export const Contact = ({ name, number, onDelete }) => (
  <ContactStyled>
    <Box display={['block', 'flex']}>
      <p>{name}:</p>
      <p>{number}</p>
    </Box>
    <Button onClick={onDelete}>Delete</Button>
  </ContactStyled>
);

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
