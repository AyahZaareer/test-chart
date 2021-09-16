// import React from 'react'
// import { Pie, defaults,Bar, Line } from 'react-chartjs-2'

// // defaults.global.tooltips.enabled = false
// // defaults.global.legend.position = 'bottom'

// const BarChart = () => {
//   return (
//     <div>
//       <Line
//         data={{
//           labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//           datasets: [
//             {
//               label: 'Total Fuel Costs',
//               data: [20000, 40000, 60000, 80000, 100000, 120000],
//               backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)',
//               ],
//               borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)',
//               ],
//               borderWidth: 5,
//             },
//             // {
//             //   label: 'Quantity',
//             //   data: [47, 52, 67, 58, 9, 50],
//             //   backgroundColor: 'orange',
//             //   borderColor: 'red',
//             // },
//           ],
//         }}
//         height={400}
//         width={600}
//         options={{
//           maintainAspectRatio: false,
//           scales: {
//             yAxes: [
//               {
//                 ticks: {
//                   beginAtZero: true,
//                 },
//               },
//             ],
//           },
//           legend: {
//             labels: {
//               fontSize: 25,
//             },
//           },
//         }}
//       />
//     </div>
//   )
// }

// export default BarChart

import React, { Component } from "react";
import Chart from "react-apexcharts";

class BarChart extends Component {
    constructor(props) {
        super(props);

        this.state = {

            options: {
                labels:
                    ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
                        '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
                    ],
                chart: {
                    height: 800,
                    // width:10,
                    type: 'line',
                    stacked: false,
                },
                title: {
                    text: 'Fuel Costs',
                    align: 'left'
                },
                xaxis: {
                    categories: ['Jan','Mar','May','Jul','Sep','Nov'],
                    // type: 'datetime'
                },
                stroke: {

                    curve: 'smooth'
                },
                // fill: {
                //     type: 'solid'
                // }
                yaxis: {
                    categories: [10000, 40000, 60000, 80000, 100000, 120000],

                },
            },

            series: [{
                name: 'TEAM C',
                type: 'line',
                data: [20000, 40000, 10000, 60000, 80000, 50000,120000]
            }],

            //   xaxis: {
            //     type: 'datetime'
            //   }, 
            //   stroke: {
            //     curve: 'straight',
            //   },fill: {
            //     type: 'solid' 
            //   }

        };
    }
    render() {
        return (
            <div className="app">
                <div className="row">
                    <div className="mixed-chart">
                        <Chart
                            options={this.state.options}
                            series={this.state.series}
                            // stroke={this.state.stroke}
                            // xaxis={this.state.xaxis}
                            type="line"
                            width="800"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default BarChart;