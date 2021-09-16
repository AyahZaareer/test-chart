import React, { Component } from "react";
import Chart from "react-apexcharts";


class ApexChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [58],
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
                labels: ['Good'],
                title: {
                    text: 'Good',
                    align: 'center'
                },
                colors: [ '#42b883'],
            },
            colors: [ '#42b883'],
         

        };
    
    }



    render() {
        return (


            <div id="chart" style={{border: 'groove',width:'10rem',height:'25rem',margin:'1rem'}}>
                <Chart options={this.state.options} series={this.state.series} type="radialBar" height={200} />
               <h3  style={{textAlign:'center'}}>52</h3>
                <h3 style={{textAlign:'center'}}>Vehicles</h3>
            </div>
        )
    }
}


export default ApexChart;