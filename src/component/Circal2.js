import React, { Component } from "react";
import Chart from "react-apexcharts";


class ApexChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [27],
            options: {
                chart: {
                    height: 350,
                    type: 'radialBar',
                },
                plotOptions: {
                    radialBar: {
                        hollow: {
                            size: '58%',
                        }
                    },
                },
                labels: ['Satisfactory'],
                title: {
                    text: 'Satisfactory',
                    align: 'center'
                },
                colors: [ '#ff9a3c'],
            },
         

        };
    
    }



    render() {
        return (


            <div id="chart2"  style={{border: 'groove',width:'10rem',height:'25rem',margin:'1rem'}}>
                <Chart options={this.state.options} series={this.state.series} type="radialBar" height={200} />
                <h3  style={{textAlign:'center'}}>14</h3>
                <h3 style={{textAlign:'center'}}>Vehicles</h3>
            </div>
        )
    }
}


export default ApexChart;