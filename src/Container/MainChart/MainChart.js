import React from "react";
import ChartHeader from "../../Components/Chart/ChartHeader/ChartHeader";
import ChartMain from "../../Components/Chart/ChartMain/ChartMain";
import classes from "./MainChart.module.css";

const mainChart = () => (
  <div className={classes.MainChart}>
    <ChartHeader />
    <ChartMain />
  </div>
);

export default mainChart;
