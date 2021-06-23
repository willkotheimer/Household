import React from 'react';
import logo from '../../styles/images/logo.png';

export default function UserDashboardView(props) {
  return (
        <>
        <div className="HouseholdChores">
          <div className="top">
            <div className="groups">
              <div className="logoContainer">
                <div className="leftGroups">
                  <div className="Greetings">
                  <span className="logo"> <img src={logo} /></span><div><h1 className="mygreeting">Hi {props.user.displayName.split(' ')[0]}</h1>
                  <div className="subtitle">
                    Household Stats for &nbsp;
                    Week 25
                  </div></div>
                  </div>
                  <div className="topContainers">
                    <div>Remaining Tasks</div>
                    <div>1</div>
                  </div>
                </div>
                <div className="rightGroups">
                    <div className="topContainers">
                      <div>Remaining Tasks</div>
                      <div>2</div>
                    </div>
                    <div className="topContainers">
                      <div>Remaining Tasks</div>
                      <div>3</div>
                    </div>
                </div>
              </div>
              </div>
            </div>
            <div className="bottom">
              <div className="groups">
              <div className="title">
                Your Tasks
              </div>
              <div className="bottomGroup">
                <div className="bottomContainers">
                    remaining tasks
                </div>
                <div className="bottomContainers">
                  finished tasks
                </div>
                <div className="bottomContainers">
                  reoccuring tasks
                </div>
              </div>
              </div>
            </div>
        </div>
        </>
  );
}
