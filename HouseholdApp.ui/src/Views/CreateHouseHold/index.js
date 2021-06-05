import React, { useState, useEffect, useContext } from 'react';
import AddHouseholdMembers from '../../Components/HouseholdMembers';

export default function CreateHouseholdView(props) {
  return (
        <div className="createHousehold">
            <AddHouseholdMembers />
        </div>
  );
}
