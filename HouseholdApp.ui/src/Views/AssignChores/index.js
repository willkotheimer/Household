import React, { useState, useEffect } from 'react';
import AppModal from '../../Components/AppModal';
import ChoresLeft from '../../Components/ChoresLeft';
import ChoreForm from '../../Components/Forms/ChoreForm';
import AssignmentForm from '../../Components/Forms/AssignmentForm';
import week from '../../helpers/data/weekNum';
import Assignment from '../../helpers/data/assignmentData';
import Chore from '../../helpers/data/choresData';

export default function AssignChoresView({ uid, userHousehold, householdId }) {
  const [chores, setChores] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [choresLeft, setChoresLeft] = useState([]);

  const update = () => {
    console.warn(Promise.all([getAssignments, getChores]));
    /*
    Assignment.getAssignmentsByHouseholdFromUserId(uid).then((resp) => {
      setAssignments(resp.filter((x) => x.week === parseInt(week.thisWeek(), 10)));
    });
    Chore.getChoresByHousehold(householdId).then((resp) => {
      setChores(resp);
    });
    const leftchores = chores.filter((chore) => (chore.id != assignments.choreId));
    setChoresLeft(leftchores); */
  };
  const getAssignments = () => Assignment.getAssignmentsByHouseholdFromUserId(uid);
  const getChores = () => Chore.getChoresByHousehold(householdId);
  update();
  // useEffect(() => update(), [assignments]); */

  return (
        <div className="assignChores">
            Assign Chores Page
            { // this.state.choresLeft && <ChoresLeft chores={this.state.choresLeft} />
}
            <AppModal title={'Add Chore'} buttonLabel={'Add Chore'}>
               <ChoreForm uid={uid} />
            </AppModal>
            {userHousehold[0]
            && userHousehold[0].map((person, index) => (
                <>
                <div>{person.firstname}</div>
                <AppModal title={'Add Chore'} key={`modal-${index}`} buttonLabel={`${person.firstname}'s Chores`}>
                <AssignmentForm userHousehold={userHousehold} householdId={householdId} key={`assignForm-${index}`} person={person} uid={uid} />
                </AppModal>
                </>
            ))}
        </div>
  );
}
