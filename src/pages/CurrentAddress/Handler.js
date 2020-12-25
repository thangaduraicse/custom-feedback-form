import CurrentAddressContainer from './Container';

const CurrentAddressHandler = () => {
  const onSubmit = values => {
    console.log('Form value: -->', values);
  }

  return (
    <CurrentAddressContainer onSubmit={onSubmit}/>
  );
};

export default CurrentAddressHandler;
