import React from 'react';
import firebase from 'firebase';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from '../Components/Nav';
import './App.scss';
import fbConnection from '../helpers/data/fbConnection';
import { UserProvider } from '../Components/User';

fbConnection();

class App extends React.Component {
  state = {
    user: null,
    userDetails: {},
  };

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        user
          .getIdToken()
          .then((token) => sessionStorage.setItem('token', token));
        this.setState({ user });
        this.setState({ authed: true });
      } else {
        this.setState({ user: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { user, userDetails } = this.state;
    return (
    <div className='App'>
      <UserProvider>
          <Router>
            <Nav user={user} userDetails={userDetails} />
          </Router>
      </UserProvider>
    </div>
    );
  }
}

export default App;
