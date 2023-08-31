"use client"
import styles from "../../styles/infocharacter/text.module.scss";
import Image from "next/image";
import TB from "../../public/img/logos/logo_28.png";
import hability1 from "../../public/img/habilidades/RS_3_HB1.png";
import hability2 from "../../public/img/habilidades/RS_3_HB2.png";
import hability3 from "../../public/img/habilidades/RS_3_HB3.png";
import { useState } from "react";

const Texto = () => {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };
  const [habilidad, setHabilidad] = useState(1);
  //armas
  return (
    <>
      <main className={styles.contenedorPersonajesinfo}>
        <section className={styles.contenedorInfoJuego}>
          <article>
            <p>
              Terrabellum is an exciting action game with immersive combat in
              destructible maps, featuring unique characters with special
              abilities. Compete against three other players in a match where
              the last one standing takes the victory.
            </p>
          </article>
          <Image
            src={TB}
            className={styles.imagenTB}
            alt="imagen terrabellum"
          />
        </section>
        <div className={styles.contenedorPersonajes}>
          <div>
            <p>
              Characters: In the Terrabellum universe, characters have unique
              abilities that set them apart from others. These abilities can be
              combined to create even more impactful and effective strategies
              and tactics in the game.
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <div className={styles.cointainhabilidadgift}>
              <div className={styles.containhabilidad}>
                <Image
                  src={hability1}
                  className={`${styles.hability} ${
                    activeButton === 1 ? styles.activeButton : ""
                  }`}
                  alt="Habilidad"
                  id="lal"
                  onClick={() => {
                    setHabilidad(1);
                    handleButtonClick(1);
                  }}
                />
                <Image
                  src={hability2}
                  className={`${styles.hability} ${
                    activeButton == 2 ? styles.activeButton : ""
                  }`}
                  alt="Habilidad"
                  id="lal"
                  onClick={() => {
                    setHabilidad(2);
                    handleButtonClick(2);
                  }}
                />
                <Image
                  src={hability3}
                  className={`${styles.hability} ${
                    activeButton === 3 ? styles.activeButton : ""
                  }`}
                  alt="Habilidad"
                  onClick={() => {
                    setHabilidad(3);
                    handleButtonClick(3);
                  }}
                />
              </div>
              {habilidad == 1 ? (
                <div className={styles.Hb1}>
                  <p>
                  Ability 1 is an inherent function tied to your character,
                   unleashing mobility or strategic advantages. Activated based on your
                    character's unique strengths, it enables you to harness strategic benefits
                     tailored to the situation.
                  </p>
                </div>
              ) : habilidad == 2 ? (
                <div className={styles.Hb1}>
                  <p>
                  Introducing Ability 2, a unique skill attained through the fusion of
                   three heroes. This exceptional ability is a product of combining the strengths
                    of these three distinct characters. Once fused, you gain 
                  access to a versatile skill that can be any one of the three heroes' abilities.
                  </p>
                </div>
              ) : habilidad == 3 ? (
                <div className={styles.Hb1}>
                  <p>
                  Ability 3, the pinnacle of skill acquisition, achieved by merging 
                  three Level 2 heroes. This ultimate ability results from the fusion of these advanced characters,
                   culminating in an immensely potent skill drawn from any of the three merged heroes.
                  </p>
                </div>
              ) : null}
            </div>
            {/* <div className={styles.gift}></div> */}
          </div>
        </div>
        {/* CONTAIN ARMS */}
      </main>
    </>
  );
};
export default Texto;
