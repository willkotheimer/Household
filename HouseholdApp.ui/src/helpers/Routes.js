import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AssignChores from '../Views/AssignChores';
import ChoresDetailsView from '../Views/ChoreDetails';
import CreateHouseholdView from '../Views/CreateHouseHold';
import HouseholdChoresView from '../Views/HouseholdChores';
import InspireMe from '../Views/InspireMe';
import SplashPageView from '../Views/SplashPage';
import Stats from '../Views/Stats';

export default function Routes({
  user,
  authed,
  uid,
  userHousehold,
}) {
  return (
        <Switch>
            <Route exact path='/assignchores' component={(props) => <AssignChores props={props} user={user} />}/>
            <Route exact path='/stats' component={(props) => <Stats props={props} user={user} />}/>
            <Route exact path='/inspireme' component={(props) => <InspireMe props={props} user={user} />}/>
            <Route exact path='/householdDashboard' component={(props) => <CreateHouseholdView props={props} user={user} uid={uid} userHousehold={userHousehold} />}/>
        </Switch>
  );
}
