import styles from "../styles/inicialTexto.module.scss";
import Image from "next/image";
import fondo from '../public/Fondo_Todo/Fondo_AS_1920_3010.svg'


const InicialText = () => {
  return (
    <>
    <div className={styles.fondo}>
    {/* <Image src={fondo} alt='aa' className={styles.fondo}/> */}
      <div>a</div>
      <h1 className={styles.textoinicial}>
        Únete a la competición de Terrabellum y demuestra tus
        habilidades en un juego emocionante y único que ofrece una experiencia
        de juego divertida y segura. Info armas: + de 28 armas te esperan,
        puedes desbloquearlas jugando partidas o ganando innomictokens. Usalas
        de manera estrategica y conoce bien sus consecuencias. Info personajes:
        Cada personaje tiene sus habilidades unicas, con las que deberas
        aprender como usarlas dentro de las partidas.
      </h1>
      </div>
    </>
  );
};
export default InicialText;
