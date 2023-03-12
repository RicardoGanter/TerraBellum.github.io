import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';
import { Line } from "react-chartjs-2";
const Grafico = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "My First Dataset",
        data: [20, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1
      },
      {
        label: "My Second Dataset",
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        borderColor: "rgb(255, 99, 132)",
        tension: 0.1
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Line Chart with drawTime"
      }
    },
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: "Month"
        }
      },
      y: {
        display: true,
        title: {
          display: true,
          text: "Value"
        }
      }
    },
    animations: {
      tension: {
        duration: 1000,
        easing: 'linear',
        from: 1,
        to: 0,
        loop: true
      }
    },  
    elements: {
      line: {
        drawTime: "afterDatasetsDraw" // use 'afterDatasetsDraw' option
      }
    }
  };

  return <Line data={data} options={options} />;
};

export default Grafico;