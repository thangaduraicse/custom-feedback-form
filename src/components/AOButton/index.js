const AOButton = (props) => {
  const { buttonText, className, onClick, styleType, type } = props;
  
  const buttonClassNames = [
    'components-ao-button',
    styleType,
    className
  ].filter(v => v).join(' ');

  return (
    <button
      className={buttonClassNames}
      type={type}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

AOButton.defaultProps = {
  styleType: 'primary',
  type: 'submit'
};

AOButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  styleType: PropTypes.string,
  onClick: PropTypes.func
};

export default AOButton;
