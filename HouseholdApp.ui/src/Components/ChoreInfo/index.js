import React from 'react';

export default function ChoresInfo({ choreInfo }) {
  return (
    <div>
      <div className="rightGroups">
      <div>Name: {choreInfo.name} </div>
       <div>Details: {choreInfo.description}</div>
      </div>
    </div>
  );
}
