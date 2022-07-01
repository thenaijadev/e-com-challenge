import { Fragment } from "react";
import Hamburger from "../UI/HamBurger/Hamburger";
import CartAvatar from "./CartAvatar";
import classes from "./Nav.module.css";
import Menu from "../Menu/Menu";
const MobileNav = () => {
  return (
    <Fragment>
      <div className={classes.mobile_nav}>
        <div className={classes.burger_div}>
          <Menu />
          <ul>
            <li className={classes.logo}>sneakers</li>
          </ul>
        </div>
        <CartAvatar />
      </div>
    </Fragment>
  );
};

export default MobileNav;
