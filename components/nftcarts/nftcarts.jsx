import styles from "../../styles/nftcartas.module.scss";
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
    <div className={styles.contain}>
      <div className={styles.infotexto}>
        <h3 style={{textAlign:'justify', fontSize:'1.5rem'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
          has been the industrys standard dummy text ever since the 1500s, when an unknown printer 
          took a galley of type and scrambled it to make a type specimen book. It has survived not only 
          five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
           and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem 
           Ipsum.</h3>
      </div>
      <div className={styles.cards_grid}>
        {/* <PropsNftcartas colorInit="red" colorfin="red" textinit="loool" />
        <PropsNftcartas colorInit="red" />
        <PropsNftcartas colorInit="red" /> */}
        {/* <PropsNftcarta name={"RedSpectre"} Rare={"normal"} img={Characters.agent}/>
        <PropsNftcarta name={"RedSpectre"} Rare={"pococomun"} img={Characters.aifos}/>
        <PropsNftcarta name={"RedSpectre"} Rare={"legendaria"} img={Characters.redspectre2}/> */}
      </div>
    </div>
    </animated.div>
  );
};
export default Nftcartas;
