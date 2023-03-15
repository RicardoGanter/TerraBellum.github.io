
// import Chart from 'chart.js/auto';
// import { getRelativePosition } from 'chart.js/helpers';
// import { Line } from "react-chartjs-2";
import styles from '../styles/grafico.module.scss'
import dynamic from "next/dynamic";

const Chart = dynamic(()=> import("react-apexcharts"),{
  ssr: false
})
// import React, { useState,useEffect } from 'react';
import { useEffect, useRef,useState } from 'react';


  const CandlestickChart = ({ chartData, setChartData }) => {
    // Configuración del gráfico
    const newData = [
      {
        x: new Date("2022-01-01"),
        y: [18500, 19700, 18400, 19500],
      },
      {
        x: new Date("2022-01-02"),
        y: [19500, 19800, 18700, 19300],
      },
      {
        x: new Date("2022-01-03"),
        y: [19500, 19800, 18700, 19300],
      }]
      setChartData(newData)
    const options = {
      chart: {
              animations: {
                enabled: true,
                easing: "linear",
                dynamicAnimation: {
                  speed: 500
                }
              }
      },
      title: {
        text: "Candlestick with Line Chart",
      },
      xaxis: {
        type: "datetime",
      },
      tooltip: {
        x: {
          format: "dd MMM yyyy",
        },
      },
      series: [
        {
          name: "OHLC",
          data: chartData,
        },
      ],
    };
  
    return (
      <div>
        <Chart
          options={options}
          series={options.series}
          type={"candlestick"}
          height={600}
          width={1200}
        />
      </div>
    );
  };
  
  // const Button = ({ setChartData }) => {
  //   const [showData, setShowData] = useState(false);
  
  //   const handleClick = () => {
  //     setShowData(!showData);
  //     if (!showData) {
  //       const newData = [
  //         {
  //           x: new Date("2022-01-01"),
  //           y: [18500, 19700, 18400, 19500],
  //         },
  //         {
  //           x: new Date("2022-01-02"),
  //           y: [19500, 19800, 18700, 19300],
  //         },
  //         {
  //           x: new Date("2022-01-03"),
  //           y: [19500, 19800, 18700, 19300],
  //         },
  //         {
  //           x: new Date("2022-01-04"),
  //           y: [19500, 19800, 18700, 19300],
  //         },
  //         {
  //           x: new Date("2022-01-05"),
  //           y: [19500, 19800, 18700, 19300],
  //         },
  //         {
  //           x: new Date("2022-01-06"),
  //           y: [19500, 19800, 18700, 19300],
  //         },
  //         {
  //           x: new Date("2022-01-07"),
  //           y: [9500, 9800, 8700, 12300],
  //         },
  //       ];
  //       setChartData(newData);
  //     } else {
  //       setChartData([]);
  //     }
  //   };
  
  //   return <button onClick={handleClick}>{showData ? "Hide Data" : "Show Data"}</button>;
  // };
  
  const App = () => {
    const [chartData, setChartData] = useState([]);
  
    return (
      <div className={styles.contain}>
        
        <CandlestickChart chartData={chartData} setChartData={setChartData} className={styles.grafico} />
        <div className={styles.infografico}></div>
      </div>
      // <Button setChartData={setChartData} />
    );
  };
  
  export default App;