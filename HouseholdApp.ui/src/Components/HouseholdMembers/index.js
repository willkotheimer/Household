import React, { useState, useEffect } from 'react';
import CustomizedAccordions from '../MaterialAccordion';
import assignments from '../../helpers/data/assignmentData';
import images from '../../helpers/data/imageData';
import ChoreForm from '../Forms/ChoreForm';

export default function AddHouseholdMembers({ uid }) {
  const [assignmentsUsers, setAssignmentsUsers] = useState([]);
  const [imageArray, setImages] = useState([]);

  useEffect(() => {
    assignments.getAssignmentsByHouseholdFromUserId(uid).then((resp) => {
      setAssignmentsUsers(resp);
      images.getMainImageByChoreId().then((img) => {
        setImages(img);
      });
    });
  }, []);
  return (
     <div className='d-flex'>
         <span><h1>Household Chores</h1>
            <span>
             </span>
        </span>
         <CustomizedAccordions images={imageArray} userAssignments={assignmentsUsers} />
     </div>
  );
}
