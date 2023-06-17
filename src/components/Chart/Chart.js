import React from "react";
import ChartBar from "./ChartBar";
import './Chart.css'

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    let totalMax = 0;
    dataPointValues.forEach(element => {
        totalMax += element;
    });
  return (
    <div className="chart">
      {props.dataPoints.map((datapoint) => (
        <ChartBar
          key = {datapoint.label}
          value={datapoint.value}
          maxValue={totalMax}
          label={datapoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;