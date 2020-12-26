import React from 'react';
import { reduxForm } from 'redux-form';
import { AOButton, AOInput } from 'Components';

let PreviousAddressContainer = props => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <AOInput
        id="flatNumber"
        className="flat-number"
        label="Flat/Door No."
      />
      <AOInput
        id="addressLine1"
        label="Address Line 1"
      />
      <AOInput
        id="addressLine2"
        label="Address Line 2"
      />
      <AOInput
        id="city"
        label="City"
      />
      <AOInput
        id="state"
        label="State"
      />
      <AOInput
        id="county"
        label="Country"
      />
      <AOInput
        id="postcode"
        label="Postcode"
      />
      <AOButton buttonText="Continue" />
    </form>
  );
}

PreviousAddressContainer.propTypes = {
  handleSubmit: PropTypes.func
};

PreviousAddressContainer = reduxForm({
  form: 'previousAddress',
  destroyOnUnmount: false
})(PreviousAddressContainer);

export default PreviousAddressContainer;
