"use client"
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
      window.scrollBy({ top: element.getBoundingClientRect().top - 110, behavior: "smooth" });
    }
  };
  return (
    <header className={styles.header}>
      {/* movil 480px */}
      <nav className={styles.navbarcontainMovile}>
        <Image
          priority={true}
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
            <p onClick={() => Scrollclick("Innomictoken")}>Innomic Token</p>
            <p onClick={() => Scrollclick("Characters")}>Characters</p>
            <p onClick={() => Scrollclick("Grafico")}>Innomic</p>
            <p onClick={() => Scrollclick("")}>WhitePaper</p>
          </div>
        ) : null}
      </nav>

      {/* resolucion intermedia 1020px */}
      <div className={styles.interresolution}>
        <Image priority={true} src={logo} alt="Logo tb" className={styles.img}/>
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
            <p onClick={() => { Scrollclick("Innomictoken"); setInterresolution(false) }}>Innomic Token</p>
            <p onClick={() => { Scrollclick("Characters"); setInterresolution(false) }}>Characters</p>
            <p onClick={() => { Scrollclick("Grafico"); setInterresolution(false) }}>Innomic</p>
            <Link 
            style={{textDecoration:"none", color:"white"}}
            target="_blank"
            href={"https://terrabellum.gitbook.io/whitepaper-terrabellum/"}
            onClick={() => setInterresolution(false)}>
              <p>
                WhitePaper
              </p>
            </Link>
          </div>
        ) : null}
      </div>

      {/* 1080px */}
      <nav className={styles.navbarcontain}>
        <div className={styles.group1}>
          <div
            className={styles.btnnavbar}
            onClick={() => {
              Scrollclick("Innomictoken");
            }}
          >
            Innomic Token
          </div>
          <div
            className={styles.btnnavbar}
            onClick={() => Scrollclick("Characters")}
          >
            Characters
          </div>
        </div>
          <Image priority={true} src={logo} alt="Logo" className={styles.img} onClick={() => {
            Scrollclick("Home");
          }}/>
        <div className={styles.group1}>
          <div
            className={styles.btnnavbar}
            onClick={() => {
              Scrollclick("Grafico");
            }}
          >
            Innomics
          </div>
          <Link
            className={styles.btnnavbar}
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
