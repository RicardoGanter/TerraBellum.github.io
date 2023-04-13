import styles from "../../styles/infocharacter/text.module.scss";
import Image from "next/image";
import TB from "../../public/img/logos/tb.png";
import hability1 from '../../public/img/habilidades/HABILIDAD1.webp'
import hability2 from '../../public/img/habilidades/HABILIDAD2.webp'
import hability3 from '../../public/img/habilidades/HABILIDAD3.webp'
import { useState } from "react";

const Texto = () => {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  }
  const [habilidad, setHabilidad] = useState(1);
  //armas
  return (
    <>
      <div className={styles.contenedorPersonajesinfo}>
        <div className={styles.contenedorInfoJuego}>
          <div>
            <p>
              Terrabellum is an exciting action game with immersive combat in
              destructible maps, featuring unique characters with special
              abilities. Compete against three other players in a match where
              the last one standing takes the victory.
            </p>
          </div>
          <Image
            src={TB}
            className={styles.imagenTB}
            alt="imagen terrabellum"
          />
        </div>
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
                  className={`${styles.hability} ${activeButton === 1 ? styles.activeButton : ''}`}
                  alt="Habilidad"
                  id="lal"
                  onClick={() => {
                    setHabilidad(1);
                    handleButtonClick(1);
                  }}
                />
                <Image
                  src={hability2}
                  className={`${styles.hability} ${activeButton == 2 ? styles.activeButton : ''}`}
                  alt="Habilidad"
                  id="lal"
                  onClick={() => {
                    setHabilidad(2);
                    handleButtonClick(2);
                  }}
                />
                <Image
                  src={hability3}
                  className={`${styles.hability} ${activeButton === 3 ? styles.activeButton : ''}`}
                  alt="Habilidad"
                  onClick={() => {
                    setHabilidad(3);
                    handleButtonClick(3)}
                  }
                />
              </div>
              {habilidad == 1 ? (
                <div className={styles.Hb1}>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Lorem Ipsum is simply dummy text
                    of the Ipsum has been the industrys standard dummy text ever
                    since the 1500s, when an unknown printer took a galley
                  </p>
                </div>
              ) : habilidad == 2 ? (
                <div className={styles.Hb1}>
                  <p>
                    Lolem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Lorem Ipsum is simply dummy text
                    of the Ipsum has been the industrys standard dummy text ever
                    since the 1500s, when an unknown printer took a galley
                  </p>
                </div>
              ) : habilidad == 3 ? (
                <div className={styles.Hb1}>
                  <p>
                    Lalem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Lorem Ipsum is simply dummy text
                    of the Ipsum has been the industrys standard dummy text ever
                    since the 1500s, when an unknown printer took a galley
                  </p>
                </div>
              ) : null}
            </div>
            {/* <div className={styles.gift}></div> */}
          </div>
        </div>
        {/* CONTAIN ARMS */} 
      </div>
    </>
  );
};
export default Texto;
