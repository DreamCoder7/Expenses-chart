import React from "react";
import classes from "./ChartMain.module.css";
import data from "../../../assets/data.json";

const chartMain = () => {
  const date = new Date().toDateString().slice(0, 3).toLowerCase();
  const commonHieght = 40;

  const chartData = data.map((data, index) => {
    return (
      <div className={classes.ChartMainDay} key={index}>
        <div
          className={[
            classes.ChartMainAmount,
            data.day === date ? classes.ActiveDay : null,
          ].join(" ")}
          style={{ height: `${commonHieght + data.amount}px` }}
        >
          <p className={classes.ChartMainHiddenAmount}>{data.amount}</p>
        </div>
        <div style={{ color: "hsl(28, 10%, 53%", textAlign: "center" }}>
          {data.day}
        </div>
      </div>
    );
  });

  return (
    <div className={classes.ChartMain}>
      <h2 className={classes.ChartMainHeading}>Spending - Last 7 days</h2>
      <div className={classes.ChartMainDays}>{chartData}</div>
      <div className={classes.ChartMainPrice}>
        <div>
          <p>Total this month</p>
          <span style={{ fontSize: "30px" }}>$478.33</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: "20px", alignSelf: "flex-end" }}>+2.4%</span>
          <p>from last month</p>
        </div>
      </div>
    </div>
  );
};

export default chartMain;
