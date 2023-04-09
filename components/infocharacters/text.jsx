import styles from "../../styles/infocharacter/text.module.scss";
import Image from "next/image";
import TB from "../../public/img/logos/tb.png";
import Machinegun from "@/public/img/armas/machinegun/Machinegun";
import { useState } from "react";

const Texto = () => {
  
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
                  src={Machinegun.lazzer}
                  className={styles.hability}
                  alt="Habilidad"
                  onClick={() => {
                    setHabilidad(1);
                  }}
                />
                <Image
                  src={Machinegun.lazzer}
                  className={styles.hability}
                  alt="Habilidad"
                  onClick={() => {
                    setHabilidad(2);
                  }}
                />
                <Image
                  src={Machinegun.lazzer}
                  className={styles.hability}
                  alt="Habilidad"
                  onClick={() => {
                    setHabilidad(3);
                  }}
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
                  <div>
                    Lolem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Lorem Ipsum is simply dummy text
                    of the Ipsum has been the industrys standard dummy text ever
                    since the 1500s, when an unknown printer took a galley
                  </div>
                </div>
              ) : habilidad == 3 ? (
                <div className={styles.Hb1}>
                  <div>
                    Lalem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Lorem Ipsum is simply dummy text
                    of the Ipsum has been the industrys standard dummy text ever
                    since the 1500s, when an unknown printer took a galley
                  </div>
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
