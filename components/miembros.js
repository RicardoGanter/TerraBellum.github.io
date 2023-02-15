import styles from '../styles/textoCloacas.module.css'
import Image from 'next/image'
import imgricardo from '../public/img/ourteam/yoxd.jpg'

const TextoCloacas = ()=>{


    return(
        <div>
            <h2 className={styles.texto}>Team</h2>
        <div className={styles.contain} >
            <div className={styles.containinfo} ><Image className={styles.img} src={imgricardo}  alt='imagen de perfil'/><p>Ricardo Rosales</p><p>CTO</p></div>
            <div className={styles.containinfo} ><Image className={styles.img} src={imgricardo}  alt='imagen de perfil'/><p>ricardo rosales</p><p>cto</p></div>
            <div className={styles.containinfo} ><Image className={styles.img} src={imgricardo}  alt='imagen de perfil'/><p>ricardo rosales</p><p>cto</p></div>
            <div className={styles.containinfo} ><Image className={styles.img} src={imgricardo}  alt='imagen de perfil'/><p>ricardo rosales</p><p>cto</p></div>
            <div className={styles.containinfo} ><Image className={styles.img} src={imgricardo}  alt='imagen de perfil'/><p>ricardo rosales</p><p>cto</p></div>
            <div className={styles.containinfo} ><Image className={styles.img} src={imgricardo}  alt='imagen de perfil'/><p>ricardo rosales</p><p>cto</p></div>
            <div className={styles.containinfo} ><Image className={styles.img} src={imgricardo}  alt='imagen de perfil'/><p>ricardo rosales</p><p>cto</p></div>
            <div className={styles.containinfo} ><Image className={styles.img} src={imgricardo}  alt='imagen de perfil'/><p>ricardo rosales</p><p>cto</p></div>
            <div className={styles.containinfo} ><Image className={styles.img} src={imgricardo}  alt='imagen de perfil'/><p>ricardo rosales</p><p>cto</p></div>
            <div className={styles.containinfo} ><Image className={styles.img} src={imgricardo}  alt='imagen de perfil'/><p>ricardo rosales</p><p>cto</p></div>
            <div className={styles.containinfo} ><Image className={styles.img} src={imgricardo}  alt='imagen de perfil'/><p>ricardo rosales</p><p>cto</p></div>
            <div className={styles.containinfo} ><Image className={styles.img} src={imgricardo}  alt='imagen de perfil'/><p>ricardo rosales</p><p>cto</p></div>    
        </div>
        </div>

    )
}

export default TextoCloacas;