"use client"
import styles from "../../styles/nftcarta/nftcarta.module.scss";
import PropsNftcarta from "./props.nftcartas";
import Characters from "@/public/img/characters/characters";
import { useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { useIntersection } from 'react-use';
import Image from "next/image";
import LEGENDARIA from '../../public/img/characters/LEGENDARIA.png'
import NORMAL from '../../public/img/characters/NORMAL.png'
import RARA from '../../public/img/characters/RARA.png'
const Nftcartas = () => {
  const animatedRef = useRef(null);
  const intersection = useIntersection(animatedRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  });
  const fadeIn = useSpring({
    opacity: intersection && intersection.intersectionRatio >= 0.5 ? 1 : 0,
    transform: intersection && intersection.intersectionRatio >= 0.5 ? 'translateY(0)' : 'translateY(20%)',
    config: {
      duration: 1500,
    },
  });
  return (
    <animated.div ref={animatedRef} style={fadeIn}>
      <div className={styles.infotexto}>
        <h3 style={{textAlign:'justify', fontSize:'1.5rem'}}>
        There are different types of NFTs in Terrabellum,
         including NFT hero, which is the most valuable type.
          These NFTs allow you to use the heros 
          character and generate tokens by playing. There are four types
          of hero NFTs: Golden, Purple, Common, and Exclusive, each with
          its own benefits, including maintaining the heros power,
         increasing the probability of get the power you want.  
        </h3>
      </div>
      <div className={styles.cards_grid}>
        <Image className={styles.card} src={NORMAL}/>
        <Image className={styles.card} src={RARA}/>
        <Image className={styles.card} src={LEGENDARIA}/> 
      </div>
    </animated.div>
  );
};
export default Nftcartas;
