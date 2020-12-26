import { Field } from 'redux-form';
import CustomInput from './CustomInput';

const AOInput = props => {
  const { hint, id, label, name, type } = props;

  return (
    <Field
      name={name || id}
      component={CustomInput}
      hint={hint}
      id={id}
      label={label}
      type={type}
    />
  );
};

AOInput.defaultProps = {
  type: 'text'
};


AOInput.propTypes = {
  hint: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string
}

export default AOInput;
