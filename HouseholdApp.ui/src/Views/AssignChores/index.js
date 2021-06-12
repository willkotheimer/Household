import React, { useState, useEffect } from 'react';
import AppModal from '../../Components/AppModal';
import ChoreForm from '../../Components/Forms/ChoreForm';
import user from '../../helpers/data/authData';

export default function AssignChoresView(props) {
  return (
        <div className="assignChores">
            Assign Chores Page
            <AppModal title={'Add Chore'} buttonLabel={'Add Chore'}>
               <ChoreForm uid={props.user.uid} />
            </AppModal>
        </div>
  );
}
