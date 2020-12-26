import React from 'react';
import { reduxForm, Form } from 'redux-form';
import { AOButton, AOInput } from 'Components';
import { createJoiValidator } from 'Utils';
import schema from './schema.joi';

let PersonalDetailsContainer = props => {
  const { handleSubmit } = props;

  return (
    <Form onSubmit={handleSubmit}>
      <AOInput
        id="firstName"
        label="First Name"
      />
      <AOInput
        id="middleName"
        hint="Enter if you have any"
        label="Middle Name"
      />
      <AOInput
        id="lastName"
        label="Last Name"
      />
      <AOInput
        id="dob"
        label="Date of Birth"
        type="date"
      />
      <AOInput
        id="phone"
        label="Contact Number"
        type="tel"
      />
      <AOInput
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
