import styles from "../../styles/nftcarta/nftcarta.module.scss";
// import PropsNftcartas from "./props/props.nftcartas";
import PropsNftcarta from "./props.nftcartas";
import Characters from "@/public/img/characters/characters";
import { useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { useIntersection } from 'react-use';

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
        {/* <PropsNftcartas colorInit="red" colorfin="red" textinit="loool" />
        <PropsNftcartas colorInit="red" />
        <PropsNftcartas colorInit="red" /> */}
        <PropsNftcarta name={"Agent 87"} Rare={"common"} Level={"1"} img={Characters.agent}/>
        <PropsNftcarta name={"Aifos"} Rare={"uncommon"} Level={"2"} img={Characters.aifos}/>
        <PropsNftcarta name={"RedSpectre"} Rare={"legendary"} Level={"3"} img={Characters.redspectre2}/>
      </div>
    </animated.div>
  );
};
export default Nftcartas;
