// Fragment provides a container for jsx code to be rendered
import { Fragment, useState } from "react";
import classes from "./Body.module.css";
import ImageGallery from "./ImageGallery";

import Add from "../../images/icon-plus.svg";
import Minus from "../../images/icon-minus.svg";
import { ReactComponent as MyLogo } from "../../images/button-cart.svg";
import ImageModal from "../ImageModal/ImageModal";

const MainBody = () => {
  const [units, setUnits] = useState(0);
  const [isModal, setIsModal] = useState(null);

  const onDoneHandler = () => {
    setIsModal(!isModal);
  };
  const addUnit = () => {
    setUnits(units + 1);
  };
  const substractUnit = () => {
    if (units === 0) {
      return;
    }
    setUnits(units - 1);
  };

  return (
    <Fragment>
      {isModal && <ImageModal onDone={onDoneHandler} />}
      <div className={classes.main_div}>
        <ImageGallery onClick={onDoneHandler} />
        <div className={classes.description_div}>
          <p className={classes.company}>SNEAKER COMPANY</p>
          <h3 className={classes.heading}>Fall Limited Edition Sneakers</h3>
          <p className={classes.description}>
            These low profile sneakers are your perfect casual wear companinon.
            Featuring a durable rubber outer sole, they'll withstand everything
            weather can offer.
          </p>
          <div className={classes.price_div}>
            <div className={classes.price_discount}>
              <p className={classes.price}>$125.00</p>
              <p className={classes.discount}>50%</p>
            </div>
            <p className={classes.former_price}>$250.00</p>
          </div>
          <div className={classes.quantity_div}>
            <div className={classes.quantity}>
              <div className={classes.minus_div} onClick={substractUnit}>
                <img className={classes.minus} src={Minus} />
              </div>
              <p className={classes.unit}>{units}</p>
              <div onClick={addUnit}>
                <img className={classes.add} src={Add}></img>
              </div>
            </div>
            <button className={classes.add_to_cart_btn}>
              <MyLogo className={classes.cart_logo} />

              <p className={classes.btn_title}> Add to cart</p>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MainBody;
