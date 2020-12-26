import { Field } from 'redux-form';

const AOInput = props => {
  const { componentName, hint, id, label, name, type } = props;

  return (
    <div className="components-ao-input">
      {label && <label htmlFor={id}>{label}</label>}
      {hint && <p className="small-print">{hint}</p>}

      <div className="input-field">
        <Field
          name={name || id}
          id={id}
          component={componentName}
          type={type}
        />
      </div>
    </div>
  )
};

AOInput.defaultProps = {
  componentName: 'input',
  type: 'text'
};


AOInput.propTypes = {
  componentName: PropTypes.string,
  hint: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string
}

export default AOInput;
