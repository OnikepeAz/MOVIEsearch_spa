import React from "react";
import classes from "./Header.module.css"

class Header extends React.Component {
  render() {
    return (
      <div className={classes.header}>
        <h2 className="header-text">CRUZ_TUBE!</h2>
      </div>
    );
  }
}
export default Header;
