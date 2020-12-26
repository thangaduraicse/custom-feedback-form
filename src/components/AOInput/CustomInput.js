export default (props) => {
  const {
    hint,
    id,
    input,
    meta: { error, touched },
    label,
    type
  } = props;

  const hasError = touched && error;

  return (
    <div className={`components-ao-input${hasError && ' error' || ''}`}>
      {label && <label htmlFor={id}>{label}</label>}
      {hint && <p className="small-print">{hint}</p>}

      <div className="input-field">
        <input {...input} type={type} />
        { hasError && <div className="error-message">{error}</div>}
      </div>
    </div>
  );
};
