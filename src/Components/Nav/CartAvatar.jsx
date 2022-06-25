import Cart from "../../images/icon-cart.svg";
import Avatar from "../../images/image-avatar.png";
import classes from "./Nav.module.css";
const CartAvatar = () => {
  return (
    <div className={classes.cart_avatar}>
      <img className={`${classes.cart} , ${classes.account}`} src={Cart} />
      <img className={`${classes.avatar} , ${classes.account}`} src={Avatar} />
    </div>
  );
};

export default CartAvatar;
