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
  return (
        <div className="assignChores">
            Assign Chores Page
            <AppModal key={'addChore'} title={'Add Chore'} buttonLabel={'Add Chore'}>
               <ChoreForm key={'choreform'} uid={uid} />
            </AppModal>
            {userHousehold[0]
            && userHousehold[0].map((person, index) => (
                <>
                <div key={`container${index}`}>{person.firstname}</div>
                <AppModal title={'Add Chore'} key={`modal-${index}`} buttonLabel={`${person.firstname}'s Chores`}>
                <AssignmentForm userHousehold={userHousehold} householdId={householdId} key={`assignForm-${person.firstname}`} person={person} uid={uid} />
                </AppModal>
                </>
            ))}
        </div>
  );
}
