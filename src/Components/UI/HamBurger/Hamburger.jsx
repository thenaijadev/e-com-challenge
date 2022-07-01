import Burger from "../../../images/icon-menu.svg";
import classes from "./Hamburger.module.css";
const Hamburger = (props) => {
  return (
    <div className={classes.hamburger}>
      <img className={classes.burger_img} src={Burger} />
      {props.children}
    </div>
  );
};

export default Hamburger;
