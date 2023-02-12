import Link from "next/link";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import logo from "../public/img/terrabellum.png";
import logomovil from '../public/img/tb.png'
import bar from '../public/icon/bar.svg'
import { useState } from "react";


const Header = () => {
    const [navbarcontainMovile, setNavbarcontainMovile] = useState(false)
    const [interresolution, setInterresolution] = useState(false)

    return (
    <header >
      {/* movil 480px */}
      <nav className={styles.navbarcontainMovile} >
        <Image src={logomovil} alt='logo TB movil' className={styles.imagentb}/>
        <Image onClick={()=>{setNavbarcontainMovile(!navbarcontainMovile)}} src={bar} alt='barra de navegacion' className={styles.imagenbar}/>
        {navbarcontainMovile ? 
        
        <div className={styles.optionMovile}>
          <div>InnomicToken</div>
          <div>personajes</div>
          <div>MarketPlace</div>
          <div>WithePaper</div>
        </div>
        : null}
      </nav>

      {/* resolucion intermedia 1020px */}
      <div className={styles.interresolution}>
        <Image src={logo} alt='logo tb' className={styles.img}/>
        <Image onClick={()=>{setInterresolution(!interresolution)}} src={bar} alt='logo TB movil' className={styles.imagenbar}/>
        {interresolution ?  <div className={styles.optionMovile}>
          <div>InnomicToken</div>
          <div>personajes</div>
          <div>MarketPlace</div>
          <div>WithePaper</div>
        </div>   : null}
      </div>

      
      {/* 1080px */}
      <nav className={styles.navbarcontain}>
        <div className={styles.group1} >
          <button className={`${styles.botonright} ${styles.btnnavbar}`} >InnomicToken</button>
          <button className={`${styles.botonright} ${styles.btnnavbar}`} >personajes</button>
        </div>
       
        <Image src={logo} alt="Logo" className={styles.img} />
       
        <div className={styles.group1} >
           
           <button className={`${styles.botonright} ${styles.btnnavbar}`} >MarketPlace</button>
          <button className={styles.btnnavbar} >WithePaper</button>
        </div>
      </nav>
    </header>  
  );
};

export default Header;
