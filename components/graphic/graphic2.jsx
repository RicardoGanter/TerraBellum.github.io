import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
        },
      ],
    });
    const actions = [
        {
          name: 'Randomize',
          handler(chart) {
            chart.data.datasets.forEach(dataset => {
              dataset.data = Utils.numbers({count: chart.data.labels.length, min: 0, max: 100});
            });
            chart.update();
          }
        },
      ];
    //
    const DATA_COUNT = 7;
    const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};

    const labels = [];

    for (let i = 0; i < DATA_COUNT; ++i) {
    labels.push(Utils.newDate(i));
    }

    const data = {
    labels: labels,
    datasets: [{
    type: 'bar',
    label: 'Dataset 1',
    backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
    borderColor: Utils.CHART_COLORS.red,
    data: Utils.numbers(NUMBER_CFG),
  }, {
    type: 'bar',
    label: 'Dataset 2',
    backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
    borderColor: Utils.CHART_COLORS.blue,
    data: Utils.numbers(NUMBER_CFG),
  }, {
    type: 'line',
    label: 'Dataset 3',
    backgroundColor: Utils.transparentize(Utils.CHART_COLORS.green, 0.5),
    borderColor: Utils.CHART_COLORS.green,
    fill: false,
    data: Utils.numbers(NUMBER_CFG),
  }]
};


    const config = {
        type: 'line',
        data: data,
        options: {
          plugins: {
            title: {
              text: 'Chart.js Combo Time Scale',
              display: true
            }
          },
          scales: {
            x: {
              type: 'time',
              display: true,
              offset: true,
              time: {
                unit: 'day'
              }
            },
          },
        },
      };
  };

  return (
    <div>
      <h2>Line Example</h2>
      <button onClick={chart}>Update Chart</button>
       { chartData & <Line data={chartData} />}
    </div>
  );
};

export default LineChart;
