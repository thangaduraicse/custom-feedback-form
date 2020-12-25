import MonthlyIncomeContainer from './Container';

const MonthlyIncomeHandler = () => {
  const onSubmit = values => {
    console.log('Form value: -->', values);
  }

  return (
    <MonthlyIncomeContainer onSubmit={onSubmit}/>
  );
};

export default MonthlyIncomeHandler;
