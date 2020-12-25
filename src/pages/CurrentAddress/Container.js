import React from 'react';
import { reduxForm } from 'redux-form';
import { AOButton, AOField } from 'Components';

let CurrentAddressContainer = props => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <AOField
        id="flatNumber"
        className="flat-number"
        label="Flat/Door No."
      />
      <AOField
        id="addressLine1"
        label="Address Line 1"
      />
      <AOField
        id="addressLine2"
        label="Address Line 2"
      />
      <AOField
        id="city"
        label="City"
      />
      <AOField
        id="state"
        label="State"
      />
      <AOField
        id="county"
        label="Country"
      />
      <AOField
        id="postcode"
        label="Postcode"
      />
      <AOField
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
