import Layout from "../components/layout";
import Texto from "@/components/texto.js";
import Footer from "@/components/footer";
import TextoCloacas from "@/components/miembros";
import Nftcartas from "@/components/nftcartas.jsx";
import InicialText from "@/components/inicialTexto";
import Grafico from "@/components/grafico4.jsx";
import Image from "next/image";
import styles from '../styles/home.module.scss'


// import Chart from "@/components/Chart";
export default function Home() {
  return (
    <div>
      <Layout titulo="Home">
        <div className={styles.fondo1}>
        <InicialText />
        <Texto />
        </div>
        {/* <Chart /> */}
        <div className={styles.fondo2}>
        <div style={{position:'relative', top:'2400px'}}>
        <Nftcartas />
        <Grafico />
        </div>
        </div>
        <div className={styles.fondo3}>
        <TextoCloacas />
        </div>
      </Layout>
      <Footer />
    </div>
  );
}
