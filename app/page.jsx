import "@/styles/globals.scss";
import Footer from "@/components/footer/footer.jsx";
import styles from '../styles/index.module.scss'
import { Fondo1, Fondo2, Fondo3, Fondo4,Fondo5 } from "@/components/fondos/fondos";
export default function Home() {
  return (
    <div>
      <div className={styles.contain}>
        <Fondo1/>
        <Fondo2/>
        <Fondo3/>
        <Fondo4/>
        <Fondo5/>
        <Footer />
      </div>
    </div>
  );
}