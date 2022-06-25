import Burger from "../../../images/icon-menu.svg";
import classes from "./Hamburger.module.css";
const Hamburger = () => {
  return (
    <div className={classes.hamburger}>
      <img src={Burger} />
    </div>
  );
};

export default Hamburger;
