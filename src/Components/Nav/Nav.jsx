import { Fragment } from "react";
import classes from "./Nav.module.css";
import CartAvatar from "./CartAvatar";
const Nav = () => {
  return (
    <Fragment>
    
     <div className={classes.nav_bar}>
        <ul className={classes.links}>
          <li className={classes.logo}>sneakers</li>
          <li className={classes.link}>Collections</li>
          <li className={classes.link}>Men</li>
          <li className={classes.link}>Women</li>
          <li className={classes.link}>About</li>
          <li className={classes.link}>Contact</li>
        </ul>
        <CartAvatar />
      </div>
      <hr></hr>
  
    </Fragment>
  );
};

export default Nav;
