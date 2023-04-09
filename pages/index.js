import Texto from "@/components/infocharacters/text.jsx";
import Footer from "@/components/footer/footer.jsx";
import TextoCloacas from "@/components/team/team.jsx";
import Nftcartas from "@/components/nftcarts/nftcarts.jsx";
import InicialText from "@/components/textbackground1/text.jsx";
import Grafico from "@/components/graphic/graphic.jsx";
import styles from '../styles/index.module.scss'
import Header from "@/components/header/Header";
import Infoweapons from "@/components/infoweapons/infoweapon";
import Chart from "@/components/graphic/graphic2";
export default function Home() {
  return (
    <div className={styles.contain}>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <Header/>

        <div className={styles.fondo1} id="Home">
          
          <div style={{position:"absolute", top:"30vh"}}
          className={styles.margincontain}
          >
          <InicialText/>
          </div>
          <div style={{position:"absolute",bottom:0}}>
          <Texto />
          </div>
          
        </div>

        <div className={styles.fondo2}>
          <div style={{position:"absolute", top:"50%"}}>
          <Infoweapons/>
          </div>
        </div>
        <div className={styles.fondo3} id="Innomictoken">
        <Nftcartas />
        </div>
        <div className={styles.fondo4}>
          <div className={styles.containGrafic} id="Grafico"
          style={{position:"absolute", top:"50%"}}
          >
          {/* <Grafico/> */}
          <Chart/>
          </div>
        </div>
        <div className={styles.fondo5} id="Team"
        >
          <div
          style={{position:"absolute", top:"20%"}}
          >
          <TextoCloacas />
          </div>
        </div>
      <Footer />
    </div>
  );
}
