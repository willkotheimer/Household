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
  const createImageOrder = () => {
    const imageOrderOriginal = [];
    choreImages.forEach((x) => {
      imageOrderOriginal.push(x.id);
    });
    return imageOrderOriginal;
  };
  const [imageOrder, setImageOrder] = useState([createImageOrder()]);
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
    console.clear();
    const img = await images.getImagesByChoreId(id);
    const allChoreImages = await img;
    setImages(allChoreImages);
    console.warn('before', choreImages, imageOrder);
    sortImages(choreImages, imageOrder);
    console.warn('after', choreImages, imageOrder);
    const myOrder = [];
    allChoreImages.forEach((theimg) => {
      myOrder.push(theimg.id);
    });
    setImageOrder(myOrder);
    await chores.GetChoreById(id).then((info) => {
      setChoreInfo(info);
    });
  };

  const sortImages = (origImages, ordered) => {
    const newOrder = [];
    ordered.forEach((index) => {
      newOrder.push(origImages.filter((x) => x.id === index)[0]);
    });
    setImageOrder(newOrder);
  };

  const toggleChoresOrder = () => {
    const myNewState = !choreOrderButtons;
    setChoreOrderButtons(myNewState);
  };

  /* eslint-disable no-param-reassign */
  /* esline-disable no-plusplus */
  const arrayMove = (arr, oldIndex, newIndex) => {
    while (oldIndex < 0) {
      oldIndex += arr.length;
    }
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
    return arr; // for testing purposes
  };
  /* eslint-enable no-param-reassign */
  /* eslint-enable no-plusplus */

  const toggleLeft = (imageID) => {
    console.warn(`left ${imageID}`);
    const newAArray = imageOrder;
    const index = newAArray.indexOf(imageID);
    arrayMove(newAArray, index, ((index - 1) % imageOrder.length));
    setImageOrder(newAArray);
    getChores();
  };

  const toggleRight = (imageID) => {
    console.warn(`right  ${imageID}`);
    const newAArray = imageOrder;
    const index = newAArray.indexOf(imageID);
    arrayMove(newAArray, index, ((index + 1) % imageOrder.length));
    setImageOrder(newAArray);
    getChores();
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
            Chore Details
            <div className="top">
                <div className="groups">
                   <div className="leftGroups">
                         <div className="Greetings">
                            <div className="logo"> <img alt={logo} src={logo} /></div><div><h1 className="mygreeting">Hi {
                            user?.displayName.split(' ')[0]
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
