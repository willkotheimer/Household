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
  const [imageOrder, setImageOrder] = useState([]);
  const [choreOrderButtons, setChoreOrderButtons] = useState(false);
  const { id } = props.match.params;
  let isMounted = true;

  useEffect(() => {
    if (isMounted) {
      getChores();
    }
    return () => { isMounted = false; };
  }, [id]);

  const getChores = async () => {
    if (id) {
      const img = await images.getImagesByChoreId(id);
      const allChoreImages = await img;
      await setImages(allChoreImages);
      const myOrder = [];
      allChoreImages.forEach((theimg) => {
        myOrder.push(theimg.id);
      });
      setImageOrder(myOrder);
      await chores.GetChoreById(id).then((info) => {
        setChoreInfo(info);
      });
    }
  };

  const sortImages = (origImages, ordered) => {
    const newOrder = [];
    ordered.forEach((item) => {
      newOrder.push(origImages.filter((x) => x.id === item)[0]);
    });
    setImages(newOrder);
  };

  const toggleChoresOrder = () => {
    const myNewState = !choreOrderButtons;
    setChoreOrderButtons(myNewState);
  };

  /* eslint-disable no-param-reassign */
  /* esline-disable no-plusplus */
  const arrayMove = (arr, oldIndex, newIndex) => {
    while (newIndex < 0) {
      newIndex += arr.length;
    }
    if (newIndex >= arr.length) {
      let k = newIndex - arr.length + 1;
      while (k--) {
        arr.push(undefined);
      }
    }
    arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
    return arr; // for testing
  };
  /* eslint-enable no-param-reassign */
  /* eslint-enable no-plusplus */

  const toggleLeft = async (imageID) => {
    const newAArray = imageOrder;
    const index = newAArray.indexOf(imageID);
    const newArray2 = await arrayMove(newAArray, index, ((index - 1)));
    await setImageOrder(newArray2);
    await sortImages(choreImages, imageOrder);
  };

  const toggleRight = async (imageID) => {
    const newAArray = imageOrder;
    const index = newAArray.indexOf(imageID);
    const newArray2 = await arrayMove(newAArray, index, ((index + 1) % imageOrder.length));
    await setImageOrder(newArray2);
    await sortImages(choreImages, imageOrder);
  };

  const deleteImage = (imageId, imageUrl) => {
    deleteImage(imageId, imageUrl).then(() => {
      getChores();
    });
  };

  return (
      <>
      <div>
        <div className="ChoreDetails">
            <h1>Chore Details</h1>
            <div className="top">
                <div className="groups">
                   <div className="leftGroups">
                         <div className="Greetings">
                            <div className="logo"> <img alt={logo} src={logo} /></div><div><h3 className="mygreeting">Chore: {choreInfo.name}</h3> <div>
                            <h5>Hi {
                            user?.displayName.split(' ')[0]}</h5></div>
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
            <AppModal choreInfo={choreInfo} choreImages={choreImages} title={'Add Image'} buttonLabel={'Add Image'}>
               <Uploader choreInfo={choreInfo} choreImages={choreImages} onUpdate={getChores} />
            </AppModal>
            <button className="btn btn-danger" onClick ={toggleChoresOrder}> Reorder Images </button>
              <div className="groups">
              { choreImages && (<ChoreImages
            choreImages={choreImages}
            onUpdate={getChores}
            deleteImage={deleteImage}
            showButtons={choreOrderButtons}
            toggleRight = {toggleRight}
            toggleLeft = {toggleLeft}
            />) }
            </div>
              </div>
            </div>
        </div>
        </div>
        </>
  );
}
