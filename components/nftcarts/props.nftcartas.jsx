import styles from "../../styles/nftcarta/props.nftcarta.module.scss";
import React, { useState, useEffect } from 'react'
import Image from "next/image";
const PropsNftcarta = ({ name,img,Ida,Rare}) => {

  return (
    <>
    { Rare==="normal" ? (
      <div className={styles.cards}>
      <div className={styles.contain}>
      <Image src={img}  className={styles.nft} alt="photo NFT"/>
      <div className={styles.hability}>
        <div>nombre : {name} </div>
        <div>Rareza : {Rare}</div>
        <div>nombre : </div>
      </div>
      <h1>{Ida}</h1>
      </div>
    </div>

    ) : Rare==="pococomun" ? (
      <div className={styles.cardsRare}>
      <div className={styles.contain}>
      <Image src={img}  className={styles.nft} alt="photo NFT"/>
      <div className={styles.hability}>
        <div>nombre : {name} </div>
        <div>Rareza : {Rare}</div>
        <div>nombre : </div>
      </div>
      <h1>{Ida}</h1>
      </div>
    </div>

    ) : Rare==="legendaria" ? (
      <div className={styles.cardsLegendary}>
      <div className={styles.contain}>
      <Image src={img}  className={styles.nft} alt="photo NFT"/>
      <div className={styles.hability}>
        <div>nombre : {name} </div>
        <div>Rareza : {Rare}</div>
        <div>nombre : </div>
      </div>
      <h1>{Ida}</h1>
      </div>
    </div>
    ): null}

    </>
  );
};

export default PropsNftcarta;
