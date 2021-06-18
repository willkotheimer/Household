import React, { useState, useEffect } from 'react';
import CustomizedAccordions from '../MaterialAccordion';
import assignments from '../../helpers/data/assignmentData';
import images from '../../helpers/data/imageData';
import week from '../../helpers/data/weekNum';

export default function AddHouseholdMembers({ uid, user, userHousehold }) {
  const [assignmentsUsers, setAssignmentsUsers] = useState([]);
  const [imageArray, setImages] = useState([]);

  const update = () => {
    assignments.getAssignmentsByHouseholdFromUserId(Object.values(userHousehold).filter((uh) => uh.firebaseKey == uid)[0].id).then((resp) => {
      setAssignmentsUsers(resp.filter((x) => x.week === parseInt(week.thisWeek(), 10)));
      images.getMainImageByChoreId().then((img) => {
        setImages(img);
      });
    });
  };

  useEffect(() => update(), []);

  const completeTask = (assignment) => {
    console.warn(assignment);
    const assignObject = {
      id: assignment.assignmentId,
      userId: parseInt(assignment.userId, 10),
      week: assignment.week,
      isCompleted: assignment.isCompleted,
      rating: assignment.rating,
      choreId: assignment.choreId,
    };
    assignments.setAssignmentAsDone(assignObject).then((resp) => {
      update();
    });
  };

  return (
     <div>
         <span><h1>Household Chores</h1>
            <span>
             </span>
        </span>
         <CustomizedAccordions images={imageArray} userAssignments={assignmentsUsers} completeTask={completeTask} />
     </div>
  );
}
