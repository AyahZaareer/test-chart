import React, { Component } from "react";
import Chart from "react-apexcharts";
import './css/circal3.css';


class ApexChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [15],
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
                labels: ['Critical'],
                title: {
                    text: 'Critical',
                    align: 'center',
                    fontColor:'#f95959',
                    // backgroundColor:'red'
                },
                colors: [ '#f95959'],
                fontColors: ['#f95959'],
            },


        };

    }



    render() {
        return (


            <div id="chart3" style={{ border: 'groove', width: '10rem', height: '25rem', margin: '1rem' }}>
                <Chart options={this.state.options} series={this.state.series} type="radialBar" height={200} />
                <h3  style={{textAlign:'center'}}>7</h3>
                <h3 style={{textAlign:'center'}}>Vehicles</h3>
            </div>
        )
    }
}


export default ApexChart;