import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart({ dataPoints }) {
  const dataPointVals = dataPoints.map((datapoint) => datapoint.value);
  const totalMax = Math.max(...dataPointVals);
  return (
    <div className="chart">
      {dataPoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={totalMax}
          label={datapoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
