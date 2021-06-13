import React from 'react';
import firebase from 'firebase';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../helpers/Routes';
import Nav from '../Components/Nav';
import './App.scss';
import fbConnection from '../helpers/data/fbConnection';
import Household from '../helpers/data/houseHoldUsers';

fbConnection();

class App extends React.Component {
  state = {
    user: null,
    uid: {},
    userHousehold: [],
    householdId: '',
  };

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        user
          .getIdToken()
          .then((token) => sessionStorage.setItem('token', token));
        this.setState({ user });
        this.setState({ uid: user.uid });
        this.setState({ authed: true });
        Household.getUsersHousehold(user.uid).then((resp) => {
          this.setState({ userHousehold: resp });
        });
        Household.getHousehold(user.uid).then((resp) => {
          this.setState({ householdId: resp.householdId });
        });
      } else {
        this.setState({ user: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    return (
    <div className='App'>
          <Router>
            <Nav user={this.state.user} />
            <Routes authed={this.state.authed} uid={this.state.uid} user={this.state.user} householdId={this.state.householdId} userHousehold={this.state.userHousehold} />
          </Router>
    </div>
    );
  }
}

export default App;
