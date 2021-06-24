import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import firebase from 'firebase';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import AuthData from '../../helpers/data/authData';
import Logo from '../../styles/images/Household_logo_badge.svg';

export default class Auth extends Component {
  state = {
    user: null,
    authed: null,
  };

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { user } = this.state;

    return (
      <>
      { !user ? <button className='nav-link btn btnLogin' onClick={(e) => AuthData.loginClickEvent(e)}><img src={Logo}/></button>
        : <>
      <div className='row'>
        <div className='user-icon-container'>
          <p>Hi {user?.displayName}</p>
        </div>
          <UncontrolledDropdown>
            <DropdownToggle nav caret></DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <Link to="/user-dashboard" >
                  <p>Dashboard</p>
                </Link>
              </DropdownItem>
              <DropdownItem>
                <div
                  className='nav-link btn btnSecondary'
                  onClick={(e) => AuthData.logoutClickEvent(e)}
                >
                  Logout
                </div>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      </>
      }
      </>
    );
  }
}
