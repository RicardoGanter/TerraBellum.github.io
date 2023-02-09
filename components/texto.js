import styles from '../styles/texto.module.css'
import AnimacionTexto from './animation/texto';
const Texto = ()=>{

    return(
        <div>
            <div className={styles.texto}>
                <p>Únete a la competición de Terrabellum y
                    demuestra tus habilidades en un juego emocionante y único que ofrece una experiencia de juego divertida y segura.</p>
            </div>
            
            <div className={styles.texto2} >
                <h2>+ de 28 armas te esperan, puedes desbloquearlas jugando partidas o ganando innomictokens.
                Usalas de manera estrategica y conoce bien sus consecuencias.</h2>
            </div>

            <div className={styles.texto3}>
                <h2>
                Cada personaje tiene sus habilidades unicas, con las que deberas aprender como usarlas dentro de las partidas.
                </h2>
            </div>
        </div>

    );
}


export default Texto;