import PropTypes from 'prop-types';
import { ButtonStyled } from './Button.styled';

export const Button = ({
  type = 'button',
  disabled = false,
  name,
  onClick,
  children,
}) => {
  return (
    <ButtonStyled type={type} disabled={disabled} name={name} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string,
};
