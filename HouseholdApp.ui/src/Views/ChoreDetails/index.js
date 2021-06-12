import React, { useState, useEffect } from 'react';
import images from '../../helpers/data/imageData';
import chores from '../../helpers/data/choresData';
import ChoreInfo from '../../Components/ChoreInfo';
import AppModal from '../../Components/AppModal';
import ChoreForm from '../../Components/Forms/ChoreForm';
import Uploader from '../../Components/Forms/ImageUploader';
import ChoreImages from '../../Components/ChoresImages';

export default function ChoreDetailsView(props) {
  const [choreImages, setImages] = useState([]);
  const [choreInfo, setChoreInfo] = useState([]);
  const { id } = props.match.params;

  useEffect(() => {
    images.getImagesByChoreId(id).then((img) => {
      setImages(img);
    });
    chores.GetChoreById(id).then((chore) => {
      setChoreInfo(chore);
    });
  }, []);

  const getChores = () => {
    images.getImagesByChoreId(id).then((img) => {
      setImages(img);
    });
    chores.GetChoreById(id).then((info) => {
      setChoreInfo(info);
    });
  };

  const deleteImage = (imageId, imageUrl) => {
    deleteImage(imageId, imageUrl).then(() => {
      getChores();
    });
  };

  return (
        <div className="ChoreDetails">
            Chore Details
            <ChoreImages choreImages={choreImages} onUpdate={getChores} deleteImage={deleteImage} />
            <AppModal choreInfo={choreInfo} choreImages={choreImages} title={'Add Image'} buttonLabel={'Add Image'}>
               <Uploader choreInfo={choreInfo} choreImages={choreImages} onUpdate={getChores} />
            </AppModal>
            <ChoreInfo choreInfo={choreInfo} />
            <AppModal choreInfo={choreInfo} choreImages={choreImages} title={'Edit Chore'} buttonLabel={'Edit Chore'}>
               <ChoreForm choreInfo={choreInfo} choreImages={choreImages} onUpdate={getChores} />
            </AppModal>
        </div>
  );
}
