import React, { useState, useEffect } from 'react';
import images from '../../helpers/data/imageData';
import chores from '../../helpers/data/choresData';
import ChoreImages from '../../Components/ChoresImages';
import ChoreInfo from '../../Components/ChoreInfo';

export default function ChoreDetailsView(props) {
  const [choreImages, setImages] = useState([]);
  const [choreInfo, setChoreInfo] = useState([]);
  const { id } = props.match.params;

  useEffect(() => {
    console.warn(id);
    images.getImagesByChoreId(id).then((img) => {
      setImages(img);
    });
    chores.GetChoreById(id).then((chore) => {
      setChoreInfo(chore);
    });
  }, []);

  return (
        <div className="ChoreDetails">
            Chore Details
            <ChoreImages choreImages={choreImages} />
            <ChoreInfo choreInfo={choreInfo} />
        </div>
  );
}
