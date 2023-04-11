import dynamic from "next/dynamic";
import styles from "../../styles/graphic/graphic.module.scss";
import { useState } from "react";
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
// import React, { useState,useEffect } from 'react';


const Grafico = () => {
  const [btn, setBtn] = useState(1);
  const [colors, setColors] =useState([])
  const switchColor = (color1=0,color2=0) => {
    setColors({color1,color2});
  }



  const data = 
      [
      {
        "x": "2023-01-01",
        "y": [0, 0, 0, 0]
      },
      {
        "x": "2023-01-15",
        "y": [0, 0, 0, 0]
      },
      {
        "x": "2023-02-01",
        "y": [0, 0, 0, 0]
      },
      {
        "x": "2023-02-15",
        "y": [0, 0, 0, 0]
      },
      {
        "x": "2023-03-01",
        "y": [1, 1, 1, 1]
      },
      {
        "x": "2023-03-15",
        "y": [1, 1, 1, 1]
      },
      {
        "x": "2023-04-01",
        "y": [1.5625, 2.125, 9, 9]
      },
      {
        "x": "2023-04-15",
        "y": [4.5625, 4.125, 9, 9]
      },
      {
        "x": "2023-05-01",
        "y": [5.125, 6.6875, 9, 9]
      },
      {
        "x": "2023-05-15",
        "y": [6.6875, 7.25, 9, 9]
      },
      {
        "x": "2023-06-01",
        "y": [9, 9, 4, 4]
      },
      {
        "x": "2023-06-15",
        "y": [4, 4, 4, 4]
      },
      {
        "x": "2023-07-01",
        "y": [4, 4, 4, 4]
      },
      {
        "x": "2023-07-15",
        "y": [4, 4, 4, 4]
      },
      {
        "x": "2023-08-01",
        "y": [4, 4, 4, 4]
      },
      {
        "x": "2023-08-15",
        "y": [4, 4, 4, 4]
      },
      {
        "x": "2023-09-01",
        "y": [6, 6, 4, 4]
      },
      {
        "x": "2023-09-15",
        "y": [4, 4, 4, 4]
      },
      {
        "x": "2023-10-01",
        "y": [5, 5, 5, 5]
      },
      {
        "x": "2023-10-15",
        "y": [5, 5, 5, 5]
      },
      {
        "x": "2023-11-01",
        "y": [5, 5, 5, 5]
      },
      {
        "x": "2023-11-15",
        "y": [5, 5, 5, 5]
      },
  ];
  const options = {
    chart: {
      
      animations: {
        enabled: true,
        easing: "linear",
        dynamicAnimation: {
          speed: 500,
        },
      },
      toolbar:{
        show: false,
      },
      
      background: 'rgba(20, 20, 20, .7)',
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        colorStops: [
          { offset: colors.color1, color: '#4bcd37' },

          { offset: colors.color1, color: '#cd3737' },
          { offset: colors.color2, color: '#cd3737' },
          { offset: 0, color: '#a500b9' },
        ],
        shadeIntensity: 1,
        type: 'horizontal',
        opacityFrom: 1,
        opacityTo: 1,
      },
    },
    stroke:{
      width:15,
      curve: 'smooth',
    },
    title: {
      text: "",
    },
    xaxis: {
      type: "datetime",
    },
    tooltip: {
      enabled: false
    },
    series: [
      {
        data: data,
      },
    ],
  };

  return (
    <div className={styles.contain}>
      <div className={styles.btnopc}>
      <Chart
        options={options}
        series={options.series}
        type={"line"}
        className={styles.lol}
        width={"100%"}
        height={"100%"}
      />
      <div style={{display: "flex", flexDirection: "row", gap: "2rem", justifyContent:"center"}}>
        <p 
        className={styles.btnopc1} 
        onClick={()=>{setBtn(1); 
        switchColor(13.9)}}
        >Anti Ifation NFT</p>

        <p className={styles.btnopc1} 
        onClick={()=>{setBtn(2);
          switchColor(13.9,35.5)}}>Drop limit</p>

        <p className={styles.btnopc1} 
        onClick={()=>{setBtn(3);
          switchColor(50,51)}}>F2P Long-Term</p>
      </div>
      </div>

      <div className={styles.infografico}>
        <div style={{ margin: "10px" }}>
        { btn===1 ?  
          <p>
            Our economic system limits the emission of nft to a maximum
            weekly and completely eliminates token issuance, allowing
            their values tend to rise.
          </p>
          : btn===2 ? 
          <p>
            It is very normal to see that in these projects, the values ​​of nfts are
            collapse in a short time, for this terrabellum has a system of
            guarantee, all nft have a guarantee of value to ensure
            that the prices do not fall more than that amount. acting like a floor
            price
          </p>
          : btn===3 ?
          <p>
            Terrabellum seeks to reach all types of players,
            not necessarily people who use cryptos,
            that s why people who play without nft or tokens will be able to play tournaments with REAL prizes, all prizes will be paid with ad revenue, so we will increase the demand for tokens, with what terrabellum generates with ads!!
          </p>
          : null
        }
        </div>
        
      </div>
    </div>
  );
};
export default Grafico;
