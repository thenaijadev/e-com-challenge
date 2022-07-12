import React, { Fragment, useState } from "react";
import Previous from "../../images/icon-previous.svg";
import Next from "../../images/icon-next.svg";
import Classes from "./Carousel.module.css";
import Product_1 from "../../images/image-product-1.jpg";
import Product_2 from "../../images/image-product-2.jpg";
import Product_3 from "../../images/image-product-3.jpg";
import Product_4 from "../../images/image-product-4.jpg";
const productSrc = [Product_1, Product_2, Product_3, Product_4];

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const nextHandler = () => {
    if (index !== productSrc.length - 1) {
      setIndex(index + 1);
    }
  };
  const previousHandler = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };
  return (
    <Fragment>
      <div>
        <img
          className={Classes.previous}
          src={Previous}
          onClick={previousHandler}
        ></img>

        <img
          className={`${Classes.img_div} ${Classes.img_div_opacity}`}
          src={productSrc[index]}
        ></img>

        <img className={Classes.next} src={Next} onClick={nextHandler}></img>
      </div>
    </Fragment>
  );
};

export default Carousel;
