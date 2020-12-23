import PersonalDetailsContainer from './Container';

const PersonalDetailsHandler = () => {
  const onSubmit = values => {
    console.log('Form value: -->', values);
  }

  return (
    <PersonalDetailsContainer onSubmit={onSubmit}/>
  );
};

export default PersonalDetailsHandler;
