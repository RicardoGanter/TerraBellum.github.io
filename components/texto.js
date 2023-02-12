import styles from '../styles/texto.module.css'
// import AnimacionScroll from './animation/texto';
import Image from 'next/image';
import TB from '../public/img/tb.png'
import terrabellum from '../public/img/logoprincipal.png'
import hud from './../public/img/hud.png'
import arma from './../public/img/lazzer.png'
import katana from './../public/img/katana.png'
const Texto = ()=>{
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
                    <Image src={TB} alt='imagen terrabellum' style={{width: '350px', height: '400px'}}/>
                </div>
                <div className={styles.contenedorPersonajes}>
                    <div>
                        <p>Personajes: En el universo de Terrabellum los personajes
                            tienen habilidades unicas que los diferencian universode otros. Estas habilidades 
                            se pueden combinar para crear estrategias y tacticas aun mas 
                             impactantes y efectivas en el juego
                        </p>
                    </div>
                    <Image src={hud} style={{width: '850px', height: '120px'}} alt='imagen terrabellum'  />
                </div>

                <div className={styles.contenedorArmas}>
                    <div>
                        <p>Armas: En el universo de Terrabellum, hay mas de 28 armas disponibles
                             para desbloquear.Puedes desbloquear estas armas jugando partidas otro
                              ganando InnomicToken. Es importante usar estas armas estrategicamente
                              y conocer bien sus consecuencias para tener exito en las partidas
                        </p>
                    </div>
                    <div className={styles.contenedorImagenArmas}>
                    <Image className={styles.imagenArma} src={arma}alt='imagen terrabellum'  />
                    <Image className={styles.imagenArma} src={katana}alt='imagen terrabellum'  />
                    <Image className={styles.imagenArma} src={arma}alt='imagen terrabellum'  />
                    <Image className={styles.imagenArma} src={arma}alt='imagen terrabellum'  />
                    <Image className={styles.imagenArma} src={arma}alt='imagen terrabellum'  />
                    <Image className={styles.imagenArma} src={arma}alt='imagen terrabellum'  />
                    </div>
                </div>
            </div>
        </>
    );
}


export default Texto;