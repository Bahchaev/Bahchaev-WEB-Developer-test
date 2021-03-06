//Realtime chart drawing

import React, {Component} from 'react';
import CanvasJSReact from '../../canvasjs.react';

let CanvasJSChart = CanvasJSReact.CanvasJSChart;

function randomInteger(min, max) {
    min = min * 100;
    max = max * 100;
    let rand = min - 50 + Math.random() * (max - min + 100);
    return Math.round(rand) / 100;
}


//Chart data
let chartData = [
    {
        x: new Date(),
        y: randomInteger(50,60)
    },
];   //dataPoints.
let xVal = chartData.length + 1;
let yVal = 15;
let updateInterval = 1000;

//Chart component
class DynamicLineChart extends Component {
    constructor() {
        super();
        this.updateChart = this.updateChart.bind(this);
    }

    componentDidMount() {
        setInterval(this.updateChart, updateInterval);
    }

    updateChart() {
        yVal = randomInteger(50,60);
        xVal = new Date();
        chartData.push({x: xVal, y: yVal});
        if (chartData.length > 100) { //chart showing depth
            chartData.shift();
        }
        this.chart.render();
    }

    render() {
        const options = {
            title: {
                text: ""
            },
            data: [{
                type: "line",
                dataPoints: chartData
            }]
        };

        return (
            <div>
                <h1>Обмен валют</h1>
                <CanvasJSChart options={options}
                               onRef={ref => this.chart = ref}
                />
                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            </div>
        );
    }
}

export default DynamicLineChart;