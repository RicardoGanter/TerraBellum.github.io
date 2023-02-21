import React from "react";
import { useRef } from "react";
import styles from "../styles/charts.module.css";
import { Line, getElementAtEvent } from "react-chartjs-2";
import { motion } from "framer-motion";
import { useEffect } from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // x axis scale
  LinearScale, // y axis scale
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const AnimatedLineChart = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const variants = {
    hidden: { pathLength: 0 },
    visible: { pathLength: 1 },
  };
};

const Chart = () => {
  const data = {
    labels: ["1", "2", "3", "4", "5", "6"],
    datasets: [
      {
        label: "Looping tension",
        data: [2, 4, 6, 4, 5, 6, 8],
        borderColor: "rgb(75, 192, 192)",
        fill: false,
        tension: 0.3,
      },
    ],
  };

  const config = {
    type: "line",
    data: data,
    options: {
      animations: {
        tension: {
          duration: 1000,
          easing: "linear",
          from: 1,
          to: 0,
          loop: true,
        },
      },
      scales: {
        y: {
          // defining min and max so hiding the dataset does not change scale range
          min: 0,
          max: 100,
        },
      },
    },
  };
  // </block:config>

  module.exports = {
    actions: [],
    config: config,
  };

  const options = {
    plugin: {
      legend: true,
    },
    scales: {
      y: {
        // min:3,
        // max:6
      },
    },
  };
  const chartRef = useRef();
  const onClick = (event) => {
    //   // console.log(chartRef);
    // console.log(getElementAtEvent(chartRef.current, event));
    const datasetIndexNum = getElementAtEvent(chartRef.current, event)[0]
      .datasetIndex;
    const datapoint = getElementAtEvent(chartRef.current, event)[0].index;
    // console.log(Dataset Index: ${datasetIndexNum} and DP: {datapoint} );
  };

  return (
    <div className={styles.chart}>
      <Line
        data={data}
        // options={options}
        OnClick={onClick}
        ref={chartRef}
      ></Line>
    </div>
  );
};

export default Chart;
