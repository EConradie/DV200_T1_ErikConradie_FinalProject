import React from "react";
import { Radar } from "react-chartjs-2";

function RadarChart({ chartData }) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Radar Chart</h2>
      <Radar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Revenue Generated (2016-2020)"
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
}
export default RadarChart;