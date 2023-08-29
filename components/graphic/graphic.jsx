"use client"
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
  const [bgcolor,setBgcolor] =useState("rgb(73, 14, 73)")
  const [linecolor, setLinecolor] = useState("")
  const switchlinecolor = (color1='rgb(231, 231, 43)')=>{
    setLinecolor(color1)
  }
  const switchColor = (color1=0,color2=0,color3=0) => {
    setColors({color1,color2,color3});
  }
  const data = 
      [
        { x: new Date("2023-01-01"), y: [0, 0, 0, 0] },
        { x: new Date("2023-01-15"), y: [0, 250, 125, 187.5] },
        { x: new Date("2023-02-01"), y: [0, 500, 250, 375] },
        { x: new Date("2023-02-15"), y: [0, 750, 375, 562.5] },
        { x: new Date("2023-03-01"), y: [1, 1000, 500, 750] },
        { x: new Date("2023-03-15"), y: [2, 4250, 2125, 3187.5] },
        { x: new Date("2023-04-01"), y: [4, 8500, 4250, 6375] },
        { x: new Date("2023-04-15"), y: [6, 12750, 6375, 9562.5] },
        { x: new Date("2023-05-01"), y: [8, 17000, 8500, 12750] },
        { x: new Date("2023-05-15"), y: [7, 15400, 7700, 11550] },
        { x: new Date("2023-06-01"), y: [6, 13800, 6900, 10350] },
        { x: new Date("2023-06-15"), y: [5, 12200, 6100, 9150] },
        { x: new Date("2023-07-01"), y: [4, 10600, 5300, 7950] },
        { x: new Date("2023-07-15"), y: [4.5, 9550, 4775, 7162.5] },
        { x: new Date("2023-08-01"), y: [5, 8500, 4250, 6375] },
        { x: new Date("2023-08-15"), y: [5.5, 7450, 3725, 5587.5] },
        { x: new Date("2023-09-01"), y: [6, 6400, 3200, 4800] },
        { x: new Date("2023-09-15"), y: [6.25, 6850, 3425, 5137.5] },
        { x: new Date("2023-10-01"), y: [6.5, 7300, 3650, 5475] },
        { x: new Date("2023-10-15"), y: [6.75, 7750, 3875, 5812.5] },
        { x: new Date("2023-11-01"), y: [7, 8200, 4100, 6150] },
        { x: new Date("2023-11-15"), y: [7.5, 9100, 4550, 6825] },
        { x: new Date("2023-12-01"), y: [8, 10000, 5000, 7500] },
        { x: new Date("2023-12-15"), y: [8.25, 10300, 5150, 7725] },
        { x: new Date("2024-01-01"), y: [8.5, 10600, 5300, 7950] },
        { x: new Date("2024-01-15"), y: [8.75, 10900, 5450, 8175] },
        { x: new Date("2024-02-01"), y: [9, 11200, 5600, 8400] },
        { x: new Date("2024-02-15"), y: [8.5, 10600, 5300, 7950] },
        { x: new Date("2024-03-01"), y: [8, 10000, 5000, 7500] },
        { x: new Date("2024-03-15"), y: [7.5, 9400, 4700, 7050] },
        { x: new Date("2024-04-01"), y: [7, 8800, 4400, 6600] },
        { x: new Date("2024-04-15"), y: [6.75, 8450, 4225, 6337.5] },
        { x: new Date("2024-05-01"), y: [6.5, 8100, 4050, 6075] },
        { x: new Date("2024-05-15"), y: [6.25, 7750, 3875, 5812.5] },
        { x: new Date("2024-06-01"), y: [6, 7400, 3700, 5550] },
        { x: new Date("2024-06-15"), y: [6.125, 7625, 3812.5, 5718.75] },
        { x: new Date("2024-07-01"), y: [6.25, 7850, 3925, 5887.5] },
        { x: new Date("2024-07-15"), y: [6.375, 8075, 4037.5, 6056.25] },
        { x: new Date("2024-08-01"), y: [6.5, 8300, 4150, 6225] },
        { x: new Date("2024-08-15"), y: [6.75, 8750, 4375, 6562.5] },
        { x: new Date("2024-09-01"), y: [7, 9200, 4600, 6900] },
        { x: new Date("2024-09-15"), y: [7.25, 9550, 4775, 7162.5] },
        { x: new Date("2024-10-01"), y: [7.5, 9900, 4950, 7425] },
        { x: new Date("2024-10-15"), y: [7.75, 10250, 5125, 7687.5] },
        { x: new Date("2024-11-01"), y: [8, 10600, 5300, 7950] },
        { x: new Date("2024-11-15"), y: [8.25, 10850, 5425, 8137.5] },
        { x: new Date("2024-12-01"), y: [8.5, 11100, 5550, 8325] },
        { x: new Date("2024-12-15"), y: [8.75, 11350, 5675, 8512.5] },
        { x: new Date("2025-01-01"), y: [9, 11600, 5800, 8700] },
      
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
          { offset: colors.color1, color: linecolor },
          { offset: colors.color1, color: linecolor },
          { offset: colors.color2, color: linecolor },
          { offset: colors.color2, color: linecolor },
          { offset: colors.color3, color: linecolor },
          { offset: 0, color: '#949494' },
        ],
        shadeIntensity: 1,
        type: 'horizontal',
        opacityFrom: 1,
        opacityTo: 1,
      },
    },
    stroke:{
      width:15,
      curve: "straight",
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
      {/* <div className={styles.btnopc}>
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
        switchColor(16.5);
        setBgcolor("rgb(231, 231, 43)");
        switchlinecolor("rgb(231, 231, 43)",);
      }}
        
        >Anti Infation NFT</p>

        <p className={styles.btnopc1} 
        onClick={()=>{setBtn(2);
          switchColor(16.5,33.3);
          setBgcolor("rgb(164,250,158)");
          switchlinecolor("rgb(164,250,158)");
          }}>Drop limit</p>

        <p className={styles.btnopc1} 
        onClick={()=>{setBtn(3);
          switchColor(16.5,33.3,100);
          setBgcolor("rgb(143, 157, 255)");
          switchlinecolor("rgb(143, 157, 255)");
          }}>F2P Long-Term</p>
      </div>
      </div>

      <div 
      className={styles.infografico}
      style={{backgroundColor: bgcolor}}
      >
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
        </div>  */}
        <video controls style={{margin: "0 auto", width:"100%"}}>
          <source src="/img/armas/GRAFICO_INNOMIC_2.mp4" type="video/mp4" />
          Tu navegador no admite el elemento de video.
        </video>
      {/* </div> */}
    </div>
  );
};
export default Grafico;
