import PreviousAddressContainer from './Container';

const PreviousAddressHandler = () => {
  const onSubmit = values => {
    console.log('Form value: -->', values);
  }

  return (
    <PreviousAddressContainer onSubmit={onSubmit}/>
  );
};

export default PreviousAddressHandler;
