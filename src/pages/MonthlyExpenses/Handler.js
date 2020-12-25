import MonthlyExpensesContainer from './Container';

const MonthlyExpensesHandler = () => {
  const onSubmit = values => {
    console.log('Form value: -->', values);
  }

  return (
    <MonthlyExpensesContainer onSubmit={onSubmit}/>
  );
};

export default MonthlyExpensesHandler;
