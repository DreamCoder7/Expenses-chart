import React, { Component } from "react";
import classes from "./ChartHeader.module.css";

class ChartHeader extends Component {
  state = {
    totalPrice: 0,
  };

  render() {
    return (
      <nav className={classes.ChartNav}>
        <div>
          <h3 className={classes.ChartNavHeading}>My balance</h3>
          <p className={classes.ChartNavPrice}>$921.48</p>
        </div>
        <div className={classes.ChartNavCircle}>
          <div></div>
          <div></div>
        </div>
      </nav>
    );
  }
}

export default ChartHeader;
