import React from 'react';
import AppModal from '../../Components/AppModal';
import ChoreForm from '../../Components/Forms/ChoreForm';
import AssignmentForm from '../../Components/Forms/AssignmentForm';

export default function AssignChoresView({ uid, userHousehold, householdId }) {
  return (
        <div className="assignChores">
            Assign Chores Page
            <AppModal title={'Add Chore'} buttonLabel={'Add Chore'}>
               <ChoreForm uid={uid} />
            </AppModal>
            {userHousehold[0]
            && userHousehold[0].map((person, index) => (
                <>
                <div>{person.firstname}</div>
                <AppModal title={'Add Chore'} buttonLabel={`${person.firstname}'s Chores`}>
                <AssignmentForm householdId={householdId} key={index} person={person} uid={uid} />
                </AppModal>
                </>
            ))}
        </div>
  );
}
