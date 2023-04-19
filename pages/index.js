import Footer from "@/components/footer/footer.jsx";
import styles from '../styles/index.module.scss'
import Header from "@/components/header/Header";
import Head from "next/head";
import { Fondo1, Fondo2, Fondo3, Fondo4,Fondo5 } from "@/components/fondos/fondos";
export default function Home() {
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>TerraBellum</title>
    </Head>
    <Header/>
    <div className={styles.contain}>
      <Fondo1/>
      <Fondo2/>
      <Fondo3/>
      <Fondo4/>
      <Fondo5/>
      <Footer />
    </div>
    </>
  );
}