import React from "react";

import { Chart } from "react-google-charts";

import { useGlobal } from "../../Global/GlobalStateContext";
import { MainGrafico } from "./StyledTable";

// export const data = [
//   ["Task", "Hours per Day"],
//   ["Work", 11],
//   ["Eat", 2],
//   ["Commute", 2],
//   ["Watch TV", 2],
//   ["Sleep", 7],
// ];

const colors = [
  "#4f7bd3",
  "#ff9900",
  "#109618",
  "#990099",
  "#0099c6",
  "#dd4477",
  "#66aa00",
  "#b82e2e",
  "#316395",
  "#994499",
];

const options = {
  pieHole: 0.4,
  is3D: false,
  legend: "none",
  colors: colors,
};

export default function GraficoInfo() {
  const { states } = useGlobal();

  const InfoUser = states.user.userInfo
    ? states.user.userInfo.map((user) => {
        return [`${user.first_name} ${user.last_name}`, user.participation];
      })
    : [];

  // console.log("=====================GraficoInfo==============================");

  return (
    <MainGrafico>
      <Chart
        chartType="PieChart"
        width="300px"
        height="300px"
        options={options}
        data={[["Name", "Participation"], ...InfoUser]} //
      />
    </MainGrafico>
  );
}

// <html>
//   <head>
//     <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
//     <script type="text/javascript">
//       google.charts.load("current", {packages:["corechart"]});
//       google.charts.setOnLoadCallback(drawChart);
//       function drawChart() {
//         var data = google.visualization.arrayToDataTable([
//           ['Task', 'Hours per Day'],
//           ['Work',     11],
//           ['Eat',      2],
//           ['Commute',  2],
//           ['Watch TV', 2],
//           ['Sleep',    7]
//         ]);

//         var options = {
//           title: 'My Daily Activities',
//           pieHole: 0.4,
//         };

//         var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
//         chart.draw(data, options);
//       }
//     </script>
//   </head>
//   <body>
//     <div id="donutchart" style="width: 900px; height: 500px;"></div>
//   </body>
// </html>
