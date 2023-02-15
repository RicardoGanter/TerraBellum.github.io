import styles from '../styles/nftcartas.module.css'
import { useState } from 'react';
import Rectangulo from "./Rectangulo.js";

const Nftcartas = ()=>{
    
  
    return(
        <div className={styles.contain}>
            <div className={styles.infotexto}>lalalalalalaaaaaalalalalalaalal
                lalaalalaalalalalalalalalala
                alalalallalalala
            </div>
            
            <div className={styles.cards_grid}>
                <div className={styles.cards}>
                    <div className={styles.card_front}><p className={styles.lol}>no supe que pico poner pero aqui esta xd</p></div>
                    <div className={styles.card_back}>comunistalvl5</div>
                </div>

                <div className={styles.cards}>
                    <div className={styles.card_front}><p className={styles.lol}>yo no vote por boric por que no soy comunista</p></div>
                    <div className={styles.card_back}>watonboric</div>
                </div>

                <div className={styles.cards}>
                    <div className={styles.card_front}><p className={styles.lol}>es mejor paja en la mano que 100 volando</p></div>
                    <div className={styles.card_back}>perrochico</div>
                </div>
            </div>
        </div>
        
       
    )
}

export default Nftcartas;