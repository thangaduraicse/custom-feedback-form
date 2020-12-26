import React from 'react';
import { reduxForm } from 'redux-form';
import { AOButton, AOInput } from 'Components';

let CurrentAddressContainer = props => {
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
      <AOInput
        id="moveInDate"
        label="Move in Date"
        type="date"
      />
      <AOButton buttonText="Continue" />
    </form>
  );
}

CurrentAddressContainer.propTypes = {
  handleSubmit: PropTypes.func
};

CurrentAddressContainer = reduxForm({
  form: 'currentAddress',
  destroyOnUnmount: false
})(CurrentAddressContainer);

export default CurrentAddressContainer;
