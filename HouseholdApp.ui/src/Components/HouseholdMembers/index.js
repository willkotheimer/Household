import React, { useState, useEffect } from 'react';
import authSTuff from '../../helpers/data/authData';
import getUsersHousehold from '../../helpers/data/houseHoldUsers';
import assignments from '../../helpers/data/assignmentData';

export default function AddHouseholdMembers({ user, uid, userHousehold }) {
  const [myId, setId] = useState([]);
  const [myHouseholdInfo, setHouseholdInfo] = useState([userHousehold]);
  const [assignmentsUsers, setAssignmentsUsers] = useState([]);

  useEffect(() => {
    assignments.getAssignmentsByHouseholdFromUserId(uid).then((resp) => {
      console.warn('ldjsldjsl', resp);
      setAssignmentsUsers(resp);
    });
  });
  return (
     <div>
         <h1>Add members to your household</h1>
     </div>
  );
}
