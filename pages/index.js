import Texto from "@/components/infocharacters/text.jsx";
import Footer from "@/components/footer/footer.jsx";
import TextoCloacas from "@/components/team/team.jsx";
import Nftcartas from "@/components/nftcarts/nftcarts.jsx";
import InicialText from "@/components/textbackground1/text.jsx";
import Grafico from "@/components/graphic/graphic.jsx";
import styles from '../styles/index.module.scss'
import Header from "@/components/header/Header";
import Infoweapons from "@/components/infoweapons/infoweapon";
import { a } from "react-spring";
export default function Home() {
  return (
    <div className={styles.contain}>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <Header/>
        <div className={styles.fondo1}>
        <InicialText />
        <Texto />
        </div>
        <div className={styles.fondo2}>
        <Infoweapons/>
        </div>
        <div className={styles.fondo3}>
        <Nftcartas />
        </div>
        <div className={styles.fondo5}>
        <div className={styles.containGrafic}>
        <Grafico/>
        </div>
        </div>
        <div className={styles.fondo4}>
        <TextoCloacas />
        </div>
      <Footer />
    </div>
  );
}
