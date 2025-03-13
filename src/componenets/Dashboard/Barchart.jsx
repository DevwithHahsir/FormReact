import React from "react";
import { Chart } from "react-google-charts";


// Sales Data (Bar Chart)
const salesData = [
  ["Month", "This Year", "Last Year"],
  ["JAN", 8000, 5000],
  ["JUL", 11000, 7000],
  ["AUG", 14000, 9000],
  ["SEP", 13000, 10000],
  ["OCT", 12500, 9500],
  ["NOV", 13500, 9700],
  ["DEC", 15000, 11000],
];

const salesOptions = {
  title: "Sales Over Time",
  colors: ["#007bff", "#a6a6a6"],
  chartArea: { width: "70%" },
  legend: { position: "bottom" },
};

// Donut Chart Data
const summaryData = [
  ["Status", "Count"],
  ["In Progress", 5],
  ["Completed", 7],
  ["Next Due", 4],
  ["Total", 10],
  ["In Registration", 3],
];

const summaryOptions = {
  title: "Summary",
  pieHole: 0.4,
  is3D: false,
  chartArea: { width: "80%" },
  colors: ["#dc3545", "#28a745", "#ffc107", "#17a2b8", "#007bff"],
};

// Customers Progress Data (Bar Chart)
const progressData = [
  ["Customer", "Progress", { role: "style" }],
  ["Nestle Pakistan", 80, "#007bff"],
  ["Descon Engineering", 70, "#dc3545"],
  ["Ramey Textile", 60, "#28a745"],
  ["Hubco Power", 45, "#ffc107"],
];

const progressOptions = {
  title: "Customers Progress",
  hAxis: { minValue: 0, maxValue: 100 },
  chartArea: { width: "80%" },
  legend: { position: "none" },
};

const  BarChart= () => {
  return (
    <div className="chart-maincontainer">
      <div className="chart-container">
        <Chart chartType="ColumnChart" width="95%" height="250px" data={salesData} options={salesOptions} />
        <Chart chartType="PieChart" width="95%" height="250px" data={summaryData} options={summaryOptions} />
        <Chart chartType="BarChart" width="97%" height="250px" data={progressData} options={progressOptions} />
      </div>
    
    </div>
  );
};

export default BarChart;
