import styles from '../styles/texto.module.css'
import Image from 'next/image';
import TB from '../public/img/logos/tb.png'
import hud from '../../public/img/hudd.png'
import arma from '../../public/img/armas/lazzer.png'
import katana from '../../public/img/armas/katana.png'
import axe from '../../public/img/armas/Axe.png'
import incendiaria from '../../public/img/armas/incendiaria.png'
import Lanza_papas from '../../public/img/armas/Lanza_papas.png'
import patata from '../../public/img/armas/patata.png'
import { useState } from 'react';
import arrows from '../public/arrows.svg'
const Texto = ()=>{
    const [count, setCount] = useState(1);

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
    return(
        <>
            <div className={styles.contenedorPersonajesArmas}>
                <div className={styles.contenedorInfoJuego}>
                    <div>
                        <p>Terrabellum es un juego de accion emocionante, con combates inmersivos 
                            dentro de mapas destruiles, junto a personajes con habilidades especiales y unicas.
                            donde tendras que competir contra otros 3 jugadores en una partida,
                            el ultimo de pie, se lleva la victoria.
                        </p>
                    </div>
                    <Image src={TB} className={styles.imagenTB} alt='imagen terrabellum' />
                </div>
                <div className={styles.contenedorPersonajes}>
                    <div>
                        <p>Personajes: En el universo de Terrabellum los personajes
                            tienen habilidades unicas que los diferencian universode otros. Estas habilidades 
                            se pueden combinar para crear estrategias y tacticas aun mas 
                             impactantes y efectivas en el juego
                        </p>
                    </div>
                    <div style={{display:'flex', flexDirection:'row'}}>
                    <Image src={hud} className={styles.imagenHud} alt='imagen terrabellum' style={{width:'400px', height:'200px'}} />
                    <h3>lol</h3>
                    </div>
                </div>

                <div className={styles.contenedorArmas}>
                    <div>
                        <p>Armas: En el universo de Terrabellum, hay mas de 28 armas disponibles
                             para desbloquear.Puedes desbloquear estas armas jugando partidas otro
                              ganando InnomicToken. Es importante usar estas armas estrategicamente
                              y conocer bien sus consecuencias para tener exito en las partidas
                        </p>
                    </div>
                    <div style={{position:'relative'}}>

                        <Image className={styles.btnarmasleft}  src={arrows} onClick={()=> handleDecrement()} alt='arrows image'/>
                        <Image className={styles.btnarmasrigth} src={arrows} onClick={()=>handleIncrement()} alt='arrows image'/>
                        {  (count==1) ? (
                    <div><h2 className={styles.textoimagenarmas} >granadas</h2>         
                    <div className={styles.contenedorImagenArmas}>                 
                    <Image className={styles.imagenArma} src={patata}alt='imagen terrabellum'  />
                    <Image className={styles.imagenArma} src={incendiaria}alt='imagen terrabellum'  />
                    <Image className={styles.imagenArma} src={incendiaria}alt='imagen terrabellum'  />
                    <Image className={styles.imagenArma} src={incendiaria}alt='imagen terrabellum'  />
                    <Image className={styles.imagenArma} src={incendiaria}alt='imagen terrabellum'  />
                    <Image className={styles.imagenArma} src={incendiaria}alt='imagen terrabellum'  />
                    </div></div> ) : null }
                    
                    {  (count==2) ? (
                    <div><h2 className={styles.textoimagenarmas} >rifles</h2>         
                    <div className={styles.contenedorImagenArmas}>                 
                    <Image className={styles.imagenArma} src={arma}alt='imagen terrabellum'  />
                    <Image className={styles.imagenArma} src={Lanza_papas}alt='imagen terrabellum'  />
                    <Image className={styles.imagenArma} src={incendiaria}alt='imagen terrabellum'  />
                    <Image className={styles.imagenArma} src={incendiaria}alt='imagen terrabellum'  />
                    <Image className={styles.imagenArma} src={incendiaria}alt='imagen terrabellum'  />
                    <Image className={styles.imagenArma} src={incendiaria}alt='imagen terrabellum'  />
                    </div></div> ) : null }

                    {  (count==3) ? (
                    <div><h2 className={styles.textoimagenarmas} >meele</h2>         
                    <div className={styles.contenedorImagenArmas}>                 
                    <Image className={styles.imagenArma} src={axe}alt='imagen terrabellum'  />
                    <Image className={styles.imagenArma} src={katana}alt='imagen terrabellum'  />
                    <Image className={styles.imagenArma} src={incendiaria}alt='imagen terrabellum'  />
                    <Image className={styles.imagenArma} src={incendiaria}alt='imagen terrabellum'  />
                    <Image className={styles.imagenArma} src={incendiaria}alt='imagen terrabellum'  />
                    <Image className={styles.imagenArma} src={incendiaria}alt='imagen terrabellum'  />
                    </div></div> ) : null }

                    {  (count==4) ? (
                    <div><h2 className={styles.textoimagenarmas} >granadas</h2>         
                    <div className={styles.contenedorImagenArmas}>                 
                    <Image className={styles.imagenArma} src={patata}alt='imagen terrabellum'  />
                    <Image className={styles.imagenArma} src={incendiaria}alt='imagen terrabellum'  />
                    <Image className={styles.imagenArma} src={incendiaria}alt='imagen terrabellum'  />
                    <Image className={styles.imagenArma} src={incendiaria}alt='imagen terrabellum'  />
                    <Image className={styles.imagenArma} src={incendiaria}alt='imagen terrabellum'  />
                    <Image className={styles.imagenArma} src={incendiaria}alt='imagen terrabellum'  />
                    </div></div> ) : null }

                    </div>
                </div>
            </div>
        </>
    );
}


export default Texto;