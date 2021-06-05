import React, { useState, useEffect } from 'react';
import authSTuff from '../../helpers/data/authData';
import getUsersHousehold from '../../helpers/data/houseHoldUsers';

export default function AddHouseholdMembers({ user, uid, userHousehold }) {
  const [myId, setId] = useState([]);
  const [myHouseholdInfo, setHouseholdInfo] = useState([userHousehold]);

  return (
     <div>
         <h1>Add members to your household</h1>
     </div>
  );
}
