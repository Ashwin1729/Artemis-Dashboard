import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const BarChart = ({ label, data }) => {
  const backgroundBar = {
    id: "backgroundBar",
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const {
        data,
        ctx,
        chartArea: { top, bottom, left, right, width, height },
        scales: { x, y },
      } = chart;

      ctx.save();
      const segment = width / data.labels.length;
      const barWidth =
        segment *
        data.datasets[0].barPercentage *
        data.datasets[0].categoryPercentage;
      ctx.fillStyle = pluginOptions.barColor;

      for (let i = 0; i < data.labels.length; i++) {
        ctx.fillRect(
          x.getPixelForValue(i) - barWidth / 2,
          top,
          barWidth,
          height
        );
      }
    },
  };

  return (
    <>
      <Bar
        data={{
          labels: label,
          datasets: [
            {
              label: "Users increase count in past days",
              backgroundColor: "#3e7aeb",
              hoverBackgroundColor: "#82a5e4",
              borderColor: "transparent",
              borderDash: [],
              borderDashOffset: 0.0,
              data: data,
              barPercentage: 0.9,
              categoryPercentage: 0.9,
            },
          ],
        }}
        plugins={[backgroundBar]}
        options={{
          plugins: {
            legend: {
              display: false,
            },
            backgroundBar: {
              barColor: "#ededed",
            },
          },
          responsive: true,
          maintainAspectRatio: false,
          tooltips: {
            backgroundColor: "#f5f5f5",
            titleFontColor: "#333",
            bodyFontColor: "#666",
            bodySpacing: 4,
            xPadding: 12,
            mode: "nearest",
            intersect: 0,
            position: "nearest",
          },

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

export default BarChart;
