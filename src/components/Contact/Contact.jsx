import { Box } from 'components/Box';
import { ButtonStyled } from 'components/Button/Button';
import PropTypes from 'prop-types';
import { ContactStyled } from './Contact.styled';

export const Contact = ({ name, number }) => (
  <ContactStyled>
    <p>
      {name}: {number}
    </p>
    <ButtonStyled>Delete</ButtonStyled>
  </ContactStyled>
);

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
