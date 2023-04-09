import styles from "../../styles/nftcarta/props.nftcarta.module.scss";
import React, { useState, useEffect } from 'react'
import Image from "next/image";
const PropsNftcarta = ({ name,img,Ida,Rare,Level}) => {

  return (
    <>
    { Rare==="common" ? (
      <div className={styles.cards}>
      <div className={styles.contain}>
      <Image src={img}  className={styles.nft} alt="photo NFT"/>
      <div className={styles.hability}>
        <div>Name : {name} </div>
        <div>rare : {Rare}</div>
        <div>Level : {Level}</div>
      </div>
      <h1>{Ida}</h1>
      </div>
    </div>

    ) : Rare==="uncommon" ? (
      <div className={styles.cardsRare}>
      <div className={styles.contain}>
      <Image src={img}  className={styles.nft} alt="photo NFT"/>
      <div className={styles.hability}>
        <div>Name : {name} </div>
        <div>rare : {Rare}</div>
        <div>Level : {Level}</div>
      </div>
      <h1>{Ida}</h1>
      </div>
    </div>

    ) : Rare==="legendary" ? (
      <div className={styles.cardsLegendary}>
      <div className={styles.contain}>
      <Image src={img}  className={styles.nft} alt="photo NFT"/>
      <div className={styles.hability}>
        <div>Name : {name} </div>
        <div>rare : {Rare}</div>
        <div>Level : {Level}</div>
      </div>
      <h1>{Ida}</h1>
      </div>
    </div>
    ): null}

    </>
  );
};

export default PropsNftcarta;
