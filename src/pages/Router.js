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
      path='/current-address'
      render={ routerProps => <PersonalDetails {...routerProps} /> }
    />
    <Route
      path='/previous-address'
      render={ routerProps => <PersonalDetails {...routerProps} /> }
    />
    <Route
      path='/income'
      render={ routerProps => <PersonalDetails {...routerProps} /> }
    />
    <Route
      path='/expense'
      render={ routerProps => <PersonalDetails {...routerProps} /> }
    />
    <Route
      path='/products'
      render={ routerProps => <PersonalDetails {...routerProps} /> }
    />
    <Route
      path='/review-confirm'
      render={ routerProps => <PersonalDetails {...routerProps} /> }
    />
    <Route
      path='/thanks'
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
