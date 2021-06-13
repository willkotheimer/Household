import React, { useState, useEffect } from 'react';
import AppModal from '../../Components/AppModal';
import ChoreForm from '../../Components/Forms/ChoreForm';
import user from '../../helpers/data/authData';
import AssignmentForm from '../../Components/Forms/AssignmentForm';

export default function AssignChoresView({ uid, userHousehold, householdId }) {
  return (
        <div className="assignChores">
            Assign Chores Page
            <AppModal title={'Add Chore'} buttonLabel={'Add Chore'}>
               <ChoreForm uid={uid} />
            </AppModal>
            <AssignmentForm householdId={householdId} userHousehold={userHousehold} uid={uid} />
        </div>
  );
}
