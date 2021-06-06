import React, { useState, useEffect } from 'react';
import CustomizedAccordions from '../MaterialAccordion';
import assignments from '../../helpers/data/assignmentData';

export default function AddHouseholdMembers({ uid }) {
  const [assignmentsUsers, setAssignmentsUsers] = useState([]);

  useEffect(() => {
    assignments.getAssignmentsByHouseholdFromUserId(uid).then((resp) => {
      setAssignmentsUsers(resp);
    });
  }, []);
  return (
     <div>
         <h1>Household Chores</h1>
         <CustomizedAccordions userAssignments={assignmentsUsers} />
     </div>
  );
}
