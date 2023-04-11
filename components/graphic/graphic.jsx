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
  const switchColor = (color1) => {
    setColors(color1);
  }



  const data = [
    {
      x: new Date("2022-01-01"),
      y: [13500, 13700, 13400, 13500],
    },
    {
      x: new Date("2022-02-01"),
      y: [16000, 16000, 16000, 16250],
    },
    {
      x: new Date("2022-03-01"),
      y: [19500, 19300, 19600, 19150],
    },
    {
      x: new Date("2022-04-01"),
      y: [15750, 15650, 15300, 15525],
    },
    {
      x: new Date("2022-05-01"),
      y: [16000, 16500, 16800, 16250],
    },
    {
      x: new Date("2022-06-01"),
      y: [15500, 15000, 15200, 15800],
    },
    {
      x: new Date("2022-07-01"),
      y: [16000, 16500, 15500, 16250],
      },
      {
      x: new Date("2022-08-01"),
      y: [16500, 17000, 16000, 16750],
      },
      {
      x: new Date("2022-09-01"),
      y: [17000, 17500, 16500, 17250],
      },
      {
      x: new Date("2022-10-01"),
      y: [17500, 18000, 17000, 17750],
      },
      {
      x: new Date("2022-11-01"),
      y: [18000, 18500, 17500, 18250],
      },
      {
      x: new Date("2022-12-01"),
      y: [18500, 19000, 18000, 18750],
      },
      {
      x: new Date("2023-01-01"),
      y: [19000, 19500, 18500, 19250],
      },
      {
      x: new Date("2023-02-01"),
      y: [19500, 20000, 19000, 19750],
      },
      {
      x: new Date("2023-03-01"),
      y: [20000, 20500, 19500, 20250],
      }
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
          { offset: colors, color: '#003eb9' },
          { offset: 0, color: '#39b061' },
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
        height={700}
      />
      <div style={{display: "flex", flexDirection: "row", gap: "2rem", justifyContent:"center"}}>
        <p 
        className={styles.btnopc1} 
        onClick={()=>{setBtn(1); 
        switchColor(20)}}
        >Anti Ifation NFT</p>

        <p className={styles.btnopc1} 
        onClick={()=>{setBtn(2);
          switchColor(25)}}>Drop limit</p>

        <p className={styles.btnopc1} 
        onClick={()=>{setBtn(3);
          switchColor(50)}}>F2P Long-Term</p>
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
