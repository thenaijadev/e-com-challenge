import { useState } from "react";
import classes from "./Body.module.css";
import Product_1 from "../../images/image-product-1.jpg";
import Product_2 from "../../images/image-product-2.jpg";
import Product_3 from "../../images/image-product-3.jpg";
import Product_4 from "../../images/image-product-4.jpg";
import Product_1_thumbnail from "../../images/image-product-1-thumbnail.jpg";
import Product_2_thumbnail from "../../images/image-product-2-thumbnail.jpg";
import Product_3_thumbnail from "../../images/image-product-3-thumbnail.jpg";
import Product_4_thumbnail from "../../images/image-product-4-thumbnail.jpg";
const ImageGallery = (props) => {
  const [productImage, setProductImage] = useState(Product_1);

  const [isClicked1, setIsClicked1] = useState(true);
  const [isClicked2, setIsClicked2] = useState(false);
  const [isClicked3, setIsClicked3] = useState(false);
  const [isClicked4, setIsClicked4] = useState(false);
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
    setIsClicked1(false);
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
    <div className={classes.img_div}>
      <div className={classes.main_img_div}>
        <img
          onClick={props.onClick}
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
  );
};

export default ImageGallery;
