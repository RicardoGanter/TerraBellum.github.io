import Link from "next/link";
import styles from "../../styles/header/header.module.scss";
import Image from "next/image";
import logo from "../../public/img/logos/terrabellum.webp";
import logomovil from "../../public/img/logos/tb.webp";
import bar from "../../public/icon/bar.svg";
import { useState } from "react";
const Header = () => {
  const [navbarcontainMovile, setNavbarcontainMovile] = useState(false);
  const [interresolution, setInterresolution] = useState(false);

  const Scrollclick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header className={styles.header}>
      {/* movil 480px */}
      <nav className={styles.navbarcontainMovile}>
        <Image
          src={logomovil}
          alt="logo TB movil"
          className={styles.imagentb}
        />
        <Image
          onClick={() => {
            setNavbarcontainMovile(!navbarcontainMovile);
          }}
          src={bar}
          alt="barra de navegacion"
          className={styles.imagenbar}
        />
        {navbarcontainMovile ? (
          <div className={styles.optionMovile}>
            <div>InnomicToken</div>
            <div>personajes</div>
            <div>MarketPlace</div>
            <div>WhitePaper</div>
          </div>
        ) : null}
      </nav>

      {/* resolucion intermedia 1020px */}
      <div className={styles.interresolution}>
        <Image src={logo} alt="logo tb" className={styles.img} />
        <Image
          onClick={() => {
            setInterresolution(!interresolution);
          }}
          src={bar}
          alt="logo TB movil"
          className={styles.imagenbar}
        />
        {interresolution ? (
          <div className={styles.optionMovile}>
            <div>InnomicToken</div>
            <div>personajes</div>
            <div>MarketPlace</div>
            <div>WhitePaper</div>
          </div>
        ) : null}
      </div>

      {/* 1080px */}
      <nav className={styles.navbarcontain}>
        <div className={styles.group1}>
          <div
            className={`${styles.botonright} ${styles.btnnavbar}`}
            onClick={() => {
              Scrollclick("Innomictoken");
            }}
          >
            Innomic Token
          </div>
          <div
            className={`${styles.botonright} ${styles.btnnavbar}`}
            onClick={() => Scrollclick("Characters")}
          >
            Characters
          </div>
        </div>

        <div
          onClick={() => {
            Scrollclick("Home");
          }}
        >
          <Image src={logo} alt="Logo" className={styles.img} />
        </div>

        <div className={styles.group1}>
          <div
            className={`${styles.botonright} ${styles.btnnavbar}`}
            target="_blank"
            onClick={() => {
              Scrollclick("Grafico");
            }}
          >
            Innomics
          </div>
          <Link
            className={`${styles.botonright} ${styles.btnnavbar}`}
            target="_blank"
            href={"https://terrabellum.gitbook.io/whitepaper-terrabellum/"}
          >
            WhitePaper
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
