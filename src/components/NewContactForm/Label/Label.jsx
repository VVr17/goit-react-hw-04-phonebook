import PropTypes from 'prop-types';
import { Field, ErrorMessage } from 'formik';
import { LabelStyled, Input, ErrorText } from './Label.styled';

export const Label = ({
  type = 'text',
  name,
  required = true,
  placeholder,
}) => {
  return (
    <LabelStyled>
      {name}
      <Field name={name}>
        {({ field, meta: { touched, error } }) => (
          <Input
            type={type}
            placeholder={placeholder}
            required={required}
            border={touched && error ? 'red' : 'btnColor'}
            backgroundColor={touched && error ? 'bgErrorColor' : ''}
            {...field}
          />
        )}
      </Field>
      <ErrorMessage name={name} component={ErrorText} />
    </LabelStyled>
  );
};

Label.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
};
