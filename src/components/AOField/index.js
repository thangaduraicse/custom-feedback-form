import { Field } from 'redux-form';

const AOField = props => {
  const { componentName, hint, id, label, name, type } = props;

  return (
    <div className="components-ao-field">
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

AOField.defaultProps = {
  componentName: 'input',
  type: 'text'
};


AOField.propTypes = {
  componentName: PropTypes.string,
  hint: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string
}

export default AOField;
