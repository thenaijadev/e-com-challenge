// Fragment provides a container for jsx code to be rendered
import { Fragment, useState } from "react";
import classes from "./Body.module.css";

import Product_1 from "../../images/image-product-1.jpg";
import Product_2 from "../../images/image-product-2.jpg";
import Product_3 from "../../images/image-product-3.jpg";
import Product_4 from "../../images/image-product-4.jpg";
import Product_1_thumbnail from "../../images/image-product-1-thumbnail.jpg";
import Product_2_thumbnail from "../../images/image-product-2-thumbnail.jpg";
import Product_3_thumbnail from "../../images/image-product-3-thumbnail.jpg";
import Product_4_thumbnail from "../../images/image-product-4-thumbnail.jpg";

import Add from "../../images/icon-plus.svg";
import Minus from "../../images/icon-minus.svg";
import { ReactComponent as MyLogo } from "../../images/button-cart.svg";

const MainBody = () => {
  const [productImage, setProductImage] = useState(Product_1);
  const [units, setUnits] = useState(0);
  const [isClicked1, setIsClicked1] = useState(true);
  const [isClicked2, setIsClicked2] = useState(false);
  const [isClicked3, setIsClicked3] = useState(false);
  const [isClicked4, setIsClicked4] = useState(false);
  const addUnit = () => {
    setUnits(units + 1);
  };
  const substractUnit = () => {
    if (units === 0) {
      return;
    }
    setUnits(units - 1);
  };

  const product1ClickHandler = () => {
    setIsClicked1(true);
    setIsClicked2(false);
    setIsClicked3(false);
    setIsClicked4(false);
    setProductImage(Product_1);
  };
  const product2ClickHandler = () => {
    setIsClicked1(false);
    setIsClicked2(true);
    setIsClicked3(false);
    setIsClicked4(false);
    setProductImage(Product_2);
  };
  const product3ClickHandler = () => {
    setIsClicked2(false);
    setIsClicked3(false);
    setIsClicked4(false);
    setIsClicked3(true);
    setProductImage(Product_3);
  };
  const product4ClickHandler = () => {
    setIsClicked1(false);
    setIsClicked3(false);
    setIsClicked2(false);
    setIsClicked4(true);
    setProductImage(Product_4);
  };

  return (
    <Fragment>
      <div className={classes.main_div}>
        <div className={classes.img_div}>
          <div className={classes.main_img_div}>
            <img
              className={classes.main_img}
              alt="Main Image"
              src={productImage}
            />
          </div>
          <div className={classes.thumbnails}>
            <div
              className={`${classes.thumbnail} ${
                isClicked1 ? classes.thumbnail_clicked : ""
              }`}
            >
              <img
                onClick={product1ClickHandler}
                className={`${classes.thumbnail_img} ${
                  isClicked1 ? classes.thumbnail_img_clicked : ""
                }`}
                src={Product_1_thumbnail}
              ></img>
            </div>
            <div
              className={`${classes.thumbnail} ${
                isClicked2 ? classes.thumbnail_clicked : ""
              }`}
            >
              <img
                onClick={product2ClickHandler}
                className={`${classes.thumbnail_img} ${
                  isClicked2 ? classes.thumbnail_img_clicked : ""
                }`}
                src={Product_2_thumbnail}
              ></img>
            </div>
            <div
              className={`${classes.thumbnail} ${
                isClicked3 ? classes.thumbnail_clicked : ""
              }`}
            >
              <img
                onClick={product3ClickHandler}
                className={`${classes.thumbnail_img} ${
                  isClicked3 ? classes.thumbnail_img_clicked : ""
                }`}
                src={Product_3_thumbnail}
              ></img>
            </div>
            <div
              className={`${classes.thumbnail} ${
                isClicked4 ? classes.thumbnail_clicked : ""
              }`}
            >
              <img
                onClick={product4ClickHandler}
                className={`${classes.thumbnail_img} ${
                  isClicked4 ? classes.thumbnail_img_clicked : ""
                }`}
                src={Product_4_thumbnail}
              ></img>
            </div>
          </div>
        </div>
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
