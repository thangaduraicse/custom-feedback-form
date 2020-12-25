import { Redirect, Route, Switch } from 'react-router-dom';
import PersonalDetails from './PersonalDetails/Handler';
import CurrentAddress from './CurrentAddress/Handler';
import PreviousAddress from './PreviousAddress/Handler';
import MonthlyIncome from './MonthlyIncome/Handler';
import MonthlyExpenses from './MonthlyExpenses/Handler';

const ReactRouter5 = () => (
  <Switch>
    <Redirect exact from='/' to='/personal-details' />
    <Route
      path='/personal-details'
      render={ routerProps => <PersonalDetails {...routerProps} /> }
    />
    <Route
      path='/current-address'
      render={ routerProps => <CurrentAddress {...routerProps} /> }
    />
    <Route
      path='/previous-address'
      render={ routerProps => <PreviousAddress {...routerProps} /> }
    />
    <Route
      path='/income'
      render={ routerProps => <MonthlyIncome {...routerProps} /> }
    />
    <Route
      path='/expenses'
      render={ routerProps => <MonthlyExpenses {...routerProps} /> }
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
