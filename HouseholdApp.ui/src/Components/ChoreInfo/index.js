import React from 'react';

export default function ChoresInfo({ choreInfo }) {
  return (
    <div>
        <div className='darkAndBold'>Name: {choreInfo.name} </div>
        <div className='darkAndBold'>Name: {choreInfo.description} </div>
    </div>
  );
}
