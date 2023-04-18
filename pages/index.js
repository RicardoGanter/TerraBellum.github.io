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
import Image from "next/image";
import fondo1 from '../public/img/Fondo/fondo1.webp'
import fondo2 from '../public/img/Fondo/fondo2.webp'
import fondo3 from '../public/img/Fondo/fondo3.webp'
import fondo4 from '../public/img/Fondo/fondo4.webp'
import fondo5 from '../public/img/Fondo/fondo5.webp'

export default function Home() {
  return (
    <>
    <Header/>
    <div className={styles.contain}>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <div id="Home">
          <Image src={fondo1} alt="lol"  className={styles.fondo}/>
          <div
          style={{ position: "absolute", top: "60vh", left: "0%"}}
          className={styles.margincontain}
          >
          <InicialText/>
          </div>
          <div style={{position:"absolute",bottom:"50vh"}}
          className={styles.margincontain}
          id="Characters"
          >
          <Texto />
          </div>
        </div>
        <div style={{ position: "relative" }}>
        <Image alt="lol" src={fondo2} className={styles.fondo} />
        <div style={{ position: "absolute", top: "50%", left: "0%"}} className={styles.margincontain}>
          <Infoweapons />
        </div>
        </div>
        <div >
          <Image src={fondo3} alt="lol" className={styles.fondo}/>
        <div
        style={{ position: "absolute", top: "10%", left: "0%"}}
        className={styles.margincontain}>
        <Nftcartas />
        </div>
        </div>
        <div >
          <Image src={fondo4} alt="lol" className={styles.fondo} />
          <div id="Grafico"
          style={{ position: "absolute", top: "45%", left: "0%"}}
          >
          <Grafico/>
          </div>
        </div>


        <div>
          <Image src={fondo5} alt="Image Background" className={styles.fondo}/>
          <div
          style={{ position: "absolute", top: "20%", left: "0%"}}
          className={styles.margincontain}
          id="Innomictoken"
          >
          <Innomictoken />
          <TextoCloacas />
          </div>
        </div>
      <Footer />
    </div>
    </>
  );
}
