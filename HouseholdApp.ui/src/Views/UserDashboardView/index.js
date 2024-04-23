import React, { useState, useEffect } from 'react';
import Chores from '../../helpers/data/choresData';
import logo from '../../styles/images/logo.png';
import Footer from '../../Components/Footer';
import week from '../../helpers/data/weekNum';
import assignments from '../../helpers/data/assignmentData';
import HouseholdPieChart from '../../Components/HouseholdPieChart';

export default function UserDashboardView({
  user,
  userHousehold,
  householdId,
  uid,
}) {
  const [unassignedChores, setTotalUnassigned] = useState([]);
  const [householdChores, setHouseholdChores] = useState([]);
  const [notCompleted, setNotCompleted] = useState([]);
  const [myAssignments, setMyAssignments] = useState([]);
  const [allCompleted, setAllCompleted] = useState([]);
  const [mycompleted, setMyCompleted] = useState([]);
  const housedata = [{ label: 'Unassigned', value: unassignedChores },
    { label: 'To Do', value: notCompleted },
    { label: 'Complete', value: allCompleted },
  ];
  const myData = [{ label: 'Assignments', value: householdChores - unassignedChores },
    { label: 'My done', value: mycompleted },
    { label: 'Other To Do', value: notCompleted - mycompleted },
    { label: 'My To Do', value: myAssignments - mycompleted },
  ];
  const getAssignments = async () => {
    if (householdId) {
      const assigns = await assignments.getAssignmentsByHouseHoldId(householdId);
      const resp = await assigns;
      console.warn('week', week.thisWeek());
      const allWeeklyAssignments = await resp.filter((x) => x.week === parseInt(week.thisWeek(), 10));
      const filteredByNotCompletion = await allWeeklyAssignments.filter((x) => !x.isCompleted === true);
      const filteredByCompleted = await allWeeklyAssignments.filter((x) => x.isCompleted === true);
      if (uid && userHousehold) {
        const myid = await userHousehold[0]?.filter((uh) => uh.firebaseKey === uid)[0].id;
        const allMyWeeklyAssignments = await allWeeklyAssignments.filter((mine) => mine.userId === myid);
        setMyAssignments(allMyWeeklyAssignments.length);
        const allMyCompletedAssignments = await allMyWeeklyAssignments.filter((mycomplete) => mycomplete.isCompleted === true);
        setNotCompleted(filteredByNotCompletion.length);
        setAllCompleted(filteredByCompleted.length);
        setMyCompleted(allMyCompletedAssignments.length);
      }
    }
  };

  const getHouseHoldChores = async () => {
    const notassignedChores = await Chores.getUnassignedChoresByWeekAndHouseHold(week.thisWeek(), householdId);
    const allUnassigned = await notassignedChores;
    setTotalUnassigned(allUnassigned.length);
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
                    Week {week.thisWeek()}
                  </div></div>
                  </div>
                  <div className="topContainers">
                    <div>REMAINING TASKS</div>
                    <div><h1>{notCompleted}</h1></div>
                    <div>UNASSIGNED</div>
                    <div><h1>{unassignedChores}</h1></div>
                    <div className="householdPie"><HouseholdPieChart data={housedata} outerRadius={74} innerRadius={20} /></div>
                  </div>
                </div>
                <div className="rightGroups">
                    <div className="topContainers">
                      <div>YOUR HOUSEHOLD</div>
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
                      <div>HOUSEHOLD TASKS</div>
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
                  <div>REMAINING TASKS</div>
                  <div><h1>{myAssignments - mycompleted}</h1></div>
                </div>
                <div className="bottomContainers">
                  <div>FINISHED TASKS</div>
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
