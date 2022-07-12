import ImageGallery from "../Body/ImageGallery";
import { Fragment } from "react";
import classes from "./Modal.module.css";
import Close from "../../images/icon-close.svg";

const ImageModal = (props) => {
  return (
    <Fragment>
      <div className={classes.backdrop}>
        <img className={classes.close} src={Close} onClick={props.onDone}></img>

        <ImageGallery
          isOnModal={props.isOnModal}
          className={classes.image_gallery}
        />
      </div>
    </Fragment>
  );
};

export default ImageModal;
