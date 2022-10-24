import PropTypes from 'prop-types';
import { FilterLabelStyled } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <FilterLabelStyled>
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </FilterLabelStyled>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
