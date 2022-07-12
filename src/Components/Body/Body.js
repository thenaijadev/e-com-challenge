// Fragment provides a container for jsx code to be rendered
import { Fragment, useState } from "react";
import classes from "./Body.module.css";
import ImageGallery from "./ImageGallery";
import Description from "./Description";

import ImageModal from "../ImageModal/ImageModal";

const MainBody = () => {
  const [isModal, setIsModal] = useState(false);
  const onDoneHandler = () => {
    setIsModal(!isModal);
  };

  return (
    <Fragment>
      {isModal && <ImageModal isOnModal={isModal} onDone={onDoneHandler} />}
      <div className={classes.main_div}>
        <ImageGallery onClick={onDoneHandler} />
        <Description></Description>
      </div>
    </Fragment>
  );
};

export default MainBody;
