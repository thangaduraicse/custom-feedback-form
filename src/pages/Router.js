import { Redirect, Route, Switch } from 'react-router-dom';
import PersonalDetails from './PersonalDetails/Handler';

const ReactRouter5 = () => (
  <Switch>
    <Redirect exact from='/' to='/personal-details' />
    <Route
      path='/personal-details'
      render={ routerProps => <PersonalDetails {...routerProps} /> }
    />
    <Route
      render={
        () => (
          <div>
            <p>Configuration error: An Error Route MUST be defined
              within the routes</p>
          </div>
        )
      }
    />
  </Switch>
);

export default ReactRouter5;
