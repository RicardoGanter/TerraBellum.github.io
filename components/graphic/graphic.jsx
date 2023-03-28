import dynamic from "next/dynamic";
import styles from "../../styles/grafico.module.scss";
import { useState } from "react";
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
// import React, { useState,useEffect } from 'react';


const Grafico = () => {
  const [btn, setBtn] = useState(1);

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

  return (
    <div className={styles.contain}>
      <Chart
        options={options}
        series={options.series}
        type={"line"}
        width={700}
        height={500}
      />
      <div className={styles.btnopc}>
        <div className={styles.btnopc1} onClick={()=>setBtn(1)}></div>
        <div className={styles.btnopc2} onClick={()=>setBtn(2)}></div>
        <div className={styles.btnopc3} onClick={()=>setBtn(3)}></div>
      </div>
      <div className={styles.infografico}>
        
        <div style={{ margin: "10px" }}>
        { btn===1 ?  
          <p>
            Nuestro sistema económico limita la emisión de nft a un maximo
            semanal y elimina por completo la emision de token, permitiendo que
            sus valores tiendan al alza.
          </p>
          : btn===2 ? 
          <p>
            Es muy normal ver que en estos proyectos, los valores de nfts se
            desplomen en poco tiempo, para ello terrabellum tiene un sistema de
            garantia, todos los nft tienen una garantia de valor para asegurar
            que los precios no bajen mas que ese monto. actuando como un floor
            price
          </p>
          : btn===3 ?
          <p>
            Terrabellum busca llegar a todo tipo de jugadores,
             no necesariamente personas que usen cryptos,
              por eso las personas que jueguen sin nft o tokens podran jugar torneos con premios REALES, todos los premios se pagaran con ingresos de anuncios, asi aumentaremos la demanda por tokens, con lo que terrabellum genere con anuncios!!
          </p>
          : null
        }
        </div>
        
      </div>
    </div>
  );
};
export default Grafico;
