import dynamic from "next/dynamic";
import styles from '../styles/grafico.module.scss'
const Chart = dynamic(()=> import("react-apexcharts"),{
  ssr: false
})
// import React, { useState,useEffect } from 'react';
import { useEffect, useRef,useState } from 'react';

const Grafico = ()=>{
    const data = [
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
        },
        {
            x: new Date("2022-01-04"),
            y: [19500, 19800, 18700, 19300],
        },
        {
            x: new Date("2022-01-05"),
            y: [19500, 19800, 18700, 19300],
        },
        {
            x: new Date("2022-01-06"),
            y: [19500, 19800, 18700, 19300],
        },
        {
            x: new Date("2022-01-07"),
            y: [18500, 19700, 18400, 19500],
          }
          ,
        {
            x: new Date("2022-01-08"),
            y: [18500, 19700, 18400, 19500],
          }
        
    ]
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
              text: "",
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
                data: data,
              },
            ],
          };

    
return(
    <div className={styles.contain}>
        <Chart 
        options={options}
        series={options.series}
        type={"candlestick"}
        width={700}
        height={500} />
        <div className={styles.infografico}></div>
    </div>

)

}
export default Grafico;