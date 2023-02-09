import styles from '../styles/texto.module.css'
import AnimacionScroll from './animation/texto';
const Texto = ()=>{

    return(
        <div>
            <div className={styles.texto}>
                <p>Únete a la competición de Terrabellum y
                    demuestra tus habilidades en un juego emocionante y único que ofrece una experiencia de juego divertida y segura.</p>
            </div>
            <AnimacionScroll/>
            <div className={styles.texto3}>
                <h2>
                Cada personaje tiene sus habilidades unicas, con las que deberas aprender como usarlas dentro de las partidas.
                </h2>
            </div>
        </div>

    );
}


export default Texto;