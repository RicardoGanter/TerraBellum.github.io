import styles from "../styles/texto.module.scss";
import Image from "next/image";
import TB from "../public/img/logos/tb.png";
import Arma from "../public/img/armas/lazzer.png";
import Armas from "./props/props.armas";
import { useState } from "react";
import Arrows from "../public/arrows.svg";
const Texto = () => {
  const [count, setCount] = useState(1);
  const [habilidad, setHabilidad] = useState(1)
  //armas
  const handleIncrement = () => {
    if (count < 4) {
      setCount(count + 1);
    }
  };
  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <div className={styles.contenedorPersonajesArmas}>
        <div className={styles.contenedorInfoJuego}>
          <div>
            <p>
              Terrabellum es un juego de accion emocionante, con combates
              inmersivos dentro de mapas destruiles, junto a personajes con
              habilidades especiales y unicas. donde tendras que competir contra
              otros 3 jugadores en una partida, el ultimo de pie, se lleva la
              victoria.
            </p>
          </div>
          <Image
            src={TB}
            className={styles.imagenTB}
            alt="imagen terrabellum"
          />
        </div>
        <div className={styles.contenedorPersonajes}>
          <div>
            <p>
              Personajes: En el universo de Terrabellum los personajes tienen
              habilidades unicas que los diferencian universode otros. Estas
              habilidades se pueden combinar para crear estrategias y tacticas
              aun mas impactantes y efectivas en el juego
            </p>
          </div>
          <div style={{display: 'flex'}}>
          <div className={styles.cointainhabilidadgift}>
          <div className={styles.containhabilidad}>
            <Image src={Arma} className={styles.hability} alt='Habilidad' onClick={()=>{ setHabilidad(1)}}/>
            <Image src={Arma} className={styles.hability} alt='Habilidad' onClick={()=>{ setHabilidad(2)}}/>
            <Image src={Arma} className={styles.hability} alt='Habilidad' onClick={()=>{ setHabilidad(3)}}/>
          </div>
          { habilidad == 1 ? (
               <div className={styles.Hb1}>
                <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem 
                Lorem Ipsum is simply dummy text of the 
                  Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley</div> 
               </div> ) :

             habilidad == 2 ? ( <div className={styles.Hb1}>
              <div>Lolem Ipsum is simply dummy text of the printing and typesetting industry. Lorem 
              Lorem Ipsum is simply dummy text of the 
                Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley</div> 
             </div> ) :

              habilidad == 3 ? ( <div className={styles.Hb1}>
                <div>Lalem Ipsum is simply dummy text of the printing and typesetting industry. Lorem 
                Lorem Ipsum is simply dummy text of the 
                  Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley</div> 
               </div> )

        :null}
        </div>
        {/* <div className={styles.gift}></div> */}
        </div>
        </div>
        {/* CONTAIN ARMS */}
        <div className={styles.contenedorArmas}>
          <div>
            <p>
              Armas: En el universo de Terrabellum, hay mas de 28 armas
              disponibles para desbloquear.Puedes desbloquear estas armas
              jugando partidas otro ganando InnomicToken. Es importante usar
              estas armas estrategicamente y conocer bien sus consecuencias para
              tener exito en las partidas
            </p>
          </div>
          <div style={{ position: "relative",display:'flex', flexDirection:'row' }}>
            <Image
              className={styles.btnarmasleft}
              src={Arrows}
              onClick={() => handleDecrement()}
              alt="arrows image"
            />
            {count == 1 ? (
              <Armas tituloArmas={"Granada"} imgArma1={Arma} />
            ) : null}

            {count == 2 ? (
              <Armas tituloArmas={"Rifle"} imgArma1={Arma} imgArma2={Arma} imgArma3={Arma} imgArma4={Arma}
              imgArma5={Arma} imgArma6={Arma}/>
            ) : null}

            {count == 3 ? (
              <Armas tituloArmas={"Mele"} />
            ) : null}

            {count == 4 ? (
              <Armas tituloArmas={"granada"} />
            ) : null}
            <Image
              className={styles.btnarmasrigth}
              src={Arrows}
              onClick={() => handleIncrement()}
              alt="arrows image"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Texto;