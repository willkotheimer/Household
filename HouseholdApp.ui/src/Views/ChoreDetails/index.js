import React, { useState, useEffect } from 'react';
import images from '../../helpers/data/imageData';
import chores from '../../helpers/data/choresData';
import ChoreInfo from '../../Components/ChoreInfo';
import AppModal from '../../Components/AppModal';
import ChoreForm from '../../Components/Forms/ChoreForm';
import Uploader from '../../Components/Forms/ImageUploader';
import ChoreImages from '../../Components/ChoresImages';
import logo from '../../styles/images/logo.png';

export default function ChoreDetailsView({ props, user }) {
  const [choreImages, setImages] = useState([]);
  const [choreInfo, setChoreInfo] = useState([]);
  const { id } = props.match.params;
  console.warn(user);

  useEffect(() => {
    let isMounted = true;
    images.getImagesByChoreId(id).then((img) => {
      setImages(img);
    });
    chores.GetChoreById(id).then((chore) => {
      setChoreInfo(chore);
    });
    return () => { isMounted = false; };
  }, [id]);

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
      <>
        <div className="ChoreDetails">
            Chore Details
            <div className="top">
                <div className="groups">
                   <div className="leftGroups">
                         <div className="Greetings">
                            <div className="logo"> <img alt={logo} src={logo} /></div><div><h1 className="mygreeting">Hi {
                            user.displayName.split(' ')[0]
          }!
                            </h1>
                            <div className="subtitle">
                               Household Stats for &nbsp;
                               Week 25
                            </div>
                            <div className="topContainers leftContainer">
                              Estimated Time to Complete
                              1 Hour
                            </div>
                            </div>
                         <div className="topContainers rightContainer">
                         <AppModal choreInfo={choreInfo} choreImages={choreImages} title={'Edit Chore'} buttonLabel={'Edit Chore'}>
                            <ChoreForm choreInfo={choreInfo} choreImages={choreImages} onUpdate={getChores}/>
                         </AppModal>
                         <ChoreInfo choreInfo={choreInfo} />
                         </div>
                    </div>
                </div>
            </div>
            <div className="bottom">
              <div className="groups">
            <AppModal choreInfo={choreInfo} choreImages={choreImages} title={'Add Image'} buttonLabel={'Add Image'}>
               <Uploader choreInfo={choreInfo} choreImages={choreImages} onUpdate={getChores} />
            </AppModal>
            <ChoreImages choreImages={choreImages} onUpdate={getChores} deleteImage={deleteImage} />
            </div>
              </div>
            </div>
        </div>
        </>
  );
}
