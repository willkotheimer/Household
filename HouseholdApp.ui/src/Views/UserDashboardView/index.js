import React, { useState, useEffect } from 'react';
import Chores from '../../helpers/data/choresData';
import logo from '../../styles/images/logo.png';
import Footer from '../../Components/Footer';
import week from '../../helpers/data/weekNum';
import assignments from '../../helpers/data/assignmentData';

export default function UserDashboardView({
  user,
  userHousehold,
  householdId,
  uid,
}) {
  const [householdChores, setHouseholdChores] = useState([]);
  const [notCompleted, setNotCompleted] = useState([]);
  const [myAssignments, setMyAssignments] = useState([]);
  const [mycompleted, setMyCompleted] = useState([]);

  const getAssignments = async () => {
    if (householdId) {
      const assigns = await assignments.getAssignmentsByHouseHoldId(householdId);
      const resp = await assigns;
      const allWeeklyAssignments = await resp.filter((x) => x.week === parseInt(week.thisWeek(), 10));
      const filteredByNotCompletion = await allWeeklyAssignments.filter((x) => !x.isCompleted === true);
      if (uid && userHousehold) {
        const myid = await userHousehold[0]?.filter((uh) => uh.firebaseKey === uid)[0].id;
        const allMyWeeklyAssignments = await allWeeklyAssignments.filter((mine) => mine.userId === myid);
        setMyAssignments(allMyWeeklyAssignments.length);
        const allMyCompletedAssignments = await allMyWeeklyAssignments.filter((mycomplete) => mycomplete.isCompleted === true);
        setNotCompleted(filteredByNotCompletion.length);
        setMyCompleted(allMyCompletedAssignments.length);
      }
    }
  };

  const getHouseHoldChores = async () => {
    const allChores = await Chores.getChoresByHousehold(householdId);
    const resp = await allChores;
    setHouseholdChores(resp.length);
  };

  useEffect(() => {
    getHouseHoldChores();
    getAssignments();
  }, []);

  return (
        <>
        <div className="HouseholdChores">
          <div className="top">
            <div className="groups">
              <div className="logoContainer">
                <div className="leftGroups">
                  <div className="Greetings">
                  <span className="logo"> <img src={logo} /></span><div><h1 className="headline">HOUSEHOLD</h1><h4 className="mygreeting">Hi {user.displayName.split(' ')[0]}!</h4>
                  <div className="subtitle">
                    Household Stats for &nbsp;
                    Week 25
                  </div></div>
                  </div>
                  <div className="topContainers">
                    <div>Remaining Tasks</div>
                    <div><h1>{notCompleted}</h1></div>
                    <div>Unassigned</div>
                    <div><h1>{householdChores - notCompleted}</h1></div>
                  </div>
                </div>
                <div className="rightGroups">
                    <div className="topContainers">
                      <div>Your Household</div>
                      <div>People Names</div>
                      <ul>
                      {userHousehold[0]
                       && userHousehold[0].map((person, index) => (
                           <>
                           <li key={index}>{person.firstname}</li>
                           </>
                       ))}
                      </ul>
                    </div>
                    <div className="topContainers">
                      <div>Household Tasks</div>
                      <div><h1>{householdChores}</h1></div>
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
                  <div>Remaining tasks</div>
                  <div><h1>{myAssignments}</h1></div>
                </div>
                <div className="bottomContainers">
                  <div>Finished tasks</div>
                  <div><h1>{mycompleted}</h1></div>
                </div>
              </div>
              <Footer />
              </div>
            </div>
        </div>
        </>
  );
}
