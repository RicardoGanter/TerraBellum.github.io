import Link from "next/link";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import logo from "../public/img/logoprincipal.png";

const Header = () => {
   
    return (
    <header className={styles.navbarcontain} >
        <div className={styles.group1} >
          <button className={`${styles.botonright} ${styles.btnnavbar}`} >InnomicToken</button>
          <button className={`${styles.botonright} ${styles.btnnavbar}`} >personajes y armas</button>
          {/* <button className={styles.btnnavbar} >nosexd</button> */}
        </div>
        <Image src={logo} alt="Logo" className={styles.img} />
        <div className={styles.group1} >
           
           <button className={`${styles.botonright} ${styles.btnnavbar}`} >MarketPlace</button>
          <button className={styles.btnnavbar} >WithePaper</button>
        </div>
    </header>  
  );
};

export default Header;
