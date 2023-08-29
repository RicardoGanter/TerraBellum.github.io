"use client"
import Image from "next/image"
import Armas from "./props.weapon"
import styles from '../../styles/infoweapon/infoweapon.module.scss'
import Arrows from "../../public/arrows.svg";
import Machinegun from "@/public/img/armas/machinegun/Machinegun";
import { useState } from "react";
import Meele from "@/public/img/armas/mele/meele";
import Granade from "@/public/img/armas/granade/granade";
import buton from '../../public/BUTON.svg'
import sniper from '@/public/img/armas/SNIPER conv. (1).png'
import baasooka from '@/public/img/armas/BAZOOKA LNB (1).png'
import deagle from '@/public/img/armas/DESERT_BIRD (2).png'
import Katana from '@/public/img/armas/Katana (1).png'
import LANZA from '@/public/img/armas/LANZA (2).png'
import MINIGUN from '@/public/img/armas/MINIGUN (2).png'

const Infoweapons = ()=>{
    const [count, setCount] = useState(1);
    const handleIncrement = () => {
        if (count < 4) {
          setCount(count + 1);
        }
      };
      const handleDecrement = () => {
        if (count > 1) {
          setCount(count - 1);
        }
      };

    return(
        <div className={styles.contenedorPersonajesArmas}>
        <div className={styles.contenedorArmas}>
          <div>
            <p>
              Weapons: In the Terrabellum universe, there are over 28 weapons
              available to unlock. You can unlock these weapons by playing
              matches or earning InnomicToken. It s important to use these
              weapons strategically and understand their consequences to succeed
              in matches.
            </p>
          </div>
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              justifyContent:"center",
            }}
          >
            {/* <Image
              className={styles.btnarmasleft}
              src={Arrows}
              onClick={() => handleDecrement()}
              alt="arrows image"
            /> */}
            {count == 1 ? (
              <Armas
                tituloArmas={"Weapons"}
                imgArma1={MINIGUN}
                imgArma2={LANZA}
                imgArma3={Katana}
                imgArma4={sniper}
                imgArma5={deagle}
                imgArma6={baasooka}
              />
            ) : null}

            {/* {count == 2 ? (
              <Armas
                tituloArmas={"Meele"}
                imgArma1={Meele.Axe}
                imgArma2={Meele.dagas}
                imgArma3={Meele.espada}
                imgArma4={Meele.hacha}
                imgArma5={Meele.hacha}
                imgArma6={Meele.hacha}
              />
            ) : null}

            {count == 3 ? (
              <Armas
                tituloArmas={"Granade"}
                imgArma1={Granade.Patata}
                imgArma2={Granade.incendiaria}
                imgArma3={Granade.lanzapapas}
                imgArma4={Granade.lanzapapas}
                imgArma5={Granade.lanzapapas}
                imgArma6={Granade.lanzapapas}
              />
            ) : null}

              {count == 4 ? (
              <Armas
                tituloArmas={"Granade"}
                imgArma1={Granade.Patata}
                imgArma2={Granade.incendiaria}
                imgArma3={Granade.lanzapapas}
                imgArma4={Granade.lanzapapas}
                imgArma5={Granade.lanzapapas}
                imgArma6={Granade.lanzapapas}
              />
            ) : null} */}
            {/* <Image
              className={styles.btnarmasrigth}
              src={Arrows}
              onClick={() => handleIncrement()}
              alt="arrows image"
            /> */}
          </div>
          </div>
          </div>
    )
}
export default Infoweapons;