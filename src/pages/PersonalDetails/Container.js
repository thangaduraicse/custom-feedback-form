import React from 'react';
import { reduxForm, Form } from 'redux-form';
import { AOButton, AOField } from 'Components';
import { createJoiValidator } from 'Utils';
import schema from './schema.joi';

let PersonalDetailsContainer = props => {
  const { handleSubmit } = props;

  return (
    <Form onSubmit={handleSubmit}>
      <AOField
        id="firstName"
        label="First Name"
      />
      <AOField
        id="middleName"
        hint="Enter if you have any"
        label="Middle Name"
      />
      <AOField
        id="lastName"
        label="Last Name"
      />
      <AOField
        id="dob"
        label="Date of Birth"
        type="date"
      />
      <AOField
        id="phone"
        label="Contact Number"
        type="tel"
      />
      <AOField
        id="email"
        label="Email Address"
        type="email"
      />
      <AOButton buttonText="Continue" />
    </Form>
  );
}

PersonalDetailsContainer.propTypes = {
  handleSubmit: PropTypes.func
};

PersonalDetailsContainer = reduxForm({
  form: 'personalDetails',
  destroyOnUnmount: false,
  validate: createJoiValidator(schema)
})(PersonalDetailsContainer);

export default PersonalDetailsContainer;
