import styles from "../styles/footer.module.css";
import Image from "next/image";
import discord from "../public/icon/discord.svg";
import discordcolor from "../public/icon/discordcolor.svg";
import instagram from "../public/icon/instagram.svg";
import instgramcolor from "../public/icon/instagramcolor.svg";
import tiktok from "../public/icon/tiktok.svg";
import tiktokcolor from "../public/icon/tiktokcolor.svg";
import facebook from "../public/icon/facebook.svg";
import facebookblue from "../public/icon/facebookblue.svg";
import twitter from "../public/icon/twitter.svg";
import twitterblue from "../public/icon/twitterblue.svg";
import TB from "../public/img/tb.png";
import Link from "next/link";
import ImageHover from "./imagenRsociales";
import { useState } from "react";

const Footer = () => {
  return (
    <>
      <div className={styles.redesSociales}>
        <Link href={"/"}>
          <Image src={TB} width={350} alt="Terrabellum" />
        </Link>
        <div>
          <Link
            className={styles.icon}
            href={"https://twitter.com/TerraBellum_NFT"}
          >
            <ImageHover
              className={styles.svgRedesSociales}
              initialImage={twitter}
              alternativeImage={twitterblue}
            />
          </Link>
          <Link
            className={styles.icon}
            href={"https://www.instagram.com/Terra_Bellum/"}
          >
            <ImageHover
              className={styles.svgRedesSociales}
              initialImage={instagram}
              alternativeImage={instgramcolor}
            />
          </Link>
          <Link
            className={styles.icon}
            href={"https://facebook.com/TerraBellum_NFT"}
          >
            <ImageHover
              className={styles.svgRedesSociales}
              initialImage={facebook}
              alternativeImage={facebookblue}
            />
          </Link>
          <Link className={styles.icon} href={"tiktok.com"}>
            <ImageHover
              className={styles.svgRedesSociales}
              initialImage={tiktok}
              alternativeImage={tiktokcolor}
            />
          </Link>
          <Link className={styles.icon} href={"https://www.discord.com"}>
            <ImageHover
              className={styles.svgRedesSociales}
              initialImage={discord}
              alternativeImage={discordcolor}
            />
          </Link>
        </div>

        <div className={styles.footertext}>
          <Link
            className={styles.enlacesfooter}
            href={"https://terrabellum.gitbook.io/whitepaper-terrabellum/"}
          >
            Whitepaper
          </Link>
          <Link className={styles.enlacesfooter} href={"youtube.com"}>
            FAQ
          </Link>
          <Link className={styles.enlacesfooter} href={"youtube.com"}>
            Privacy Policy
          </Link>
          <Link className={styles.enlacesfooter} href={"youtube.com"}>
            Terms of Use
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
