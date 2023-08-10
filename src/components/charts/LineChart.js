import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = ({ label, data, title }) => {
  return (
    <>
      <Line
        data={{
          labels: label,
          datasets: [
            {
              label: title,
              fill: true,
              backgroundColor: "#e1ecff",
              borderColor: "#3e7aeb",
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: "#3e7aeb",
              pointBorderColor: "rgba(255,255,255,0)",
              pointHoverBackgroundColor: "#3e7aeb",
              pointBorderWidth: 20,
              pointHoverRadius: 5,
              pointHoverBorderWidth: 15,
              pointRadius: 0,
              data: data,
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
          legend: {
            display: false,
          },
          responsive: true,
          scales: {
            y: {
              display: false,
            },

            x: {
              display: false,
            },
          },
        }}
      />
    </>
  );
};

export default LineChart;
