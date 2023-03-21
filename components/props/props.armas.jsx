import Image from "next/image"
import styles from '../../styles/texto.module.scss'
const Armas = ({tituloArmas, imgArma1,imgArma2,imgArma3,imgArma4,imgArma5,imgArma6})=>{

    return(
        <div>
            <h2 className={styles.textoimagenarmas}>{tituloArmas}</h2>
                <div className={styles.contenedorImagenArmas}>
                  <Image
                    className={styles.imagenArma}
                    src={imgArma1}
                    alt="imagen terrabellum"
                  />
                  <Image
                    className={styles.imagenArma}
                    src={imgArma2}
                    alt="imagen terrabellum"
                  />
                  <Image
                    className={styles.imagenArma}
                    src={imgArma3}
                    alt="imagen terrabellum"
                  />
                  <Image
                    className={styles.imagenArma}
                    src={imgArma4}
                    alt="imagen terrabellum"
                  />
                  <Image
                    className={styles.imagenArma}
                    src={imgArma5}
                    alt="imagen terrabellum"
                  />
                  <Image
                    className={styles.imagenArma}
                    src={imgArma6}
                    alt="imagen terrabellum"
                  />
                </div>
        </div>
    )
}
export default Armas;