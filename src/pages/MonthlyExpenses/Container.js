import React from 'react';
import { reduxForm } from 'redux-form';
import { AOButton, AOInput } from 'Components';

let MonthlyExpensesContainer = props => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
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
        hint="MM/DD/YYYY"
        label="Date of Birth"
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
    </form>
  );
}

MonthlyExpensesContainer.propTypes = {
  handleSubmit: PropTypes.func
};

MonthlyExpensesContainer = reduxForm({
  form: 'monthlyExpenses',
  destroyOnUnmount: false
})(MonthlyExpensesContainer);

export default MonthlyExpensesContainer;
