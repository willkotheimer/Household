import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AssignChores from '../Views/AssignChores';
import ChoresDetailsView from '../Views/ChoreDetails';
import CreateHouseholdView from '../Views/CreateHouseHold';
import HouseholdChoresView from '../Views/HouseholdChores';
import InspireMe from '../Views/InspireMe';
import SplashPageView from '../Views/SplashPage';
import Stats from '../Views/Stats';

export default function Routes({ user, authed }) {
  return (
        <Switch>
            <Route exact path='/assignchores' component={AssignChores} />
            <Route exact path='/stats' component={Stats} />
            <Route exact path='/inspireme' component={InspireMe} />
            <Route exact path='/householdDashboard' component={CreateHouseholdView} />
        </Switch>
  );
}
