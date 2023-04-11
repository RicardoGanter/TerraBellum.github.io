import Texto from "@/components/infocharacters/text.jsx";
import Footer from "@/components/footer/footer.jsx";
import TextoCloacas from "@/components/team/team.jsx";
import Nftcartas from "@/components/nftcarts/nftcarts.jsx";
import InicialText from "@/components/textbackground1/text.jsx";
import Grafico from "@/components/graphic/graphic.jsx";
import styles from '../styles/index.module.scss'
import Header from "@/components/header/Header";
import Infoweapons from "@/components/infoweapons/infoweapon";
import Innomictoken from "@/components/innomictoken/innomictoken";
export default function Home() {
  return (
    <>
    <Header/>
    <div className={styles.contain}>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <div className={styles.fondo1} id="Home">
          <div
          style={{top:"60vh"}}
          className={styles.margincontain}
          >
          <InicialText/>
          </div>
          <div style={{position:"absolute",bottom:0}}
          className={styles.margincontain}
          >
          <Texto />
          </div>
          
        </div>

        <div className={styles.fondo2}>
          <div 
          style={{top:"50vh"}}
          className={styles.margincontain}>
          <Infoweapons/>
          </div>
        </div>
        <div className={styles.fondo3} id="Innomictoken">
        <div
        className={styles.margincontain}>
        <Nftcartas />
        </div>
        </div>
        <div className={styles.fondo4}>
          <div className={`${styles.containGrafic},${styles.margincontain}`} id="Grafico"
          style={{top:"50%"}}
          >
          <Grafico/>
          </div>
        </div>
        <div className={styles.fondo5} id="Team"
        >
          <div
          style={{position:"absolute", top:"20%"}}
          className={styles.margincontain}
          >
          <Innomictoken/>
          <TextoCloacas />
          </div>
        </div>
      <Footer />
    </div>
    </>
  );
}
