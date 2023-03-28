import styles from "../styles/footer.module.scss";
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
import TB from "../public/img/logos/tb.png";
import Logo from "../public/img/logos/terrabellum.png"
import Link from "next/link";
import ImageHover from "./imagenRsociales";



const Footer = () => {
  return (
    <div>

      <div className={styles.divnose}>
        <section className={styles.columnas1}>
          <div className={styles.infoFooter1}><Link
            target="_blank"
            className={styles.enlacesfooter}
            href={"https://terrabellum.gitbook.io/whitepaper-terrabellum/"}
          >
            Whitepaper
          </Link>
            <div className={styles.infoFooter}>Columna #1</div>
            <div className={styles.infoFooter}>Columna #2</div>
            <div className={styles.infoFooter}>Columna #3</div>
            <div className={styles.infoFooter}>Columna #4</div>
          </div>
          <div className={styles.infoFooter1}><Link
            target="_blank"
            className={styles.enlacesfooter}
            href={"youtube.com"}
          >
            FAQ
          </Link>
            <div className={styles.infoFooter}>Columna #5</div>
            <div className={styles.infoFooter}>Columna #6</div>
            <div className={styles.infoFooter}>Columna #7</div>
            <div className={styles.infoFooter}>Columna #8</div>
          </div>
          <div className={styles.infoFooter1}><Link
            target="_blank"
            className={styles.enlacesfooter}
            href={"youtube.com"}
          >
            Privacy Policy
          </Link>
            <div className={styles.infoFooter}>Columna #9</div>
            <div className={styles.infoFooter}>Columna #10</div>
            <div className={styles.infoFooter}>Columna #11</div>
            <div className={styles.infoFooter}>Columna #12</div>
          </div>
          <div className={styles.infoFooter1}><Link
            target="_blank"
            className={styles.enlacesfooter}
            href={"youtube.com"}
          >
            Terms of Use
          </Link>
            <div className={styles.infoFooter}>Columna #13</div>
            <div className={styles.infoFooter}>Columna #14</div>
            <div className={styles.infoFooter}>Columna #15</div>
            <div className={styles.infoFooter}>Columna #16</div>
          </div>
        </section>


      </div>
      <Link href={"/"}>
        <Image className={styles.imgTB} src={TB} alt="Terrabellum" />
      </Link>
      <div className={styles.vline}>
      </div>
      <Link href={"/"}>
        <Image className={styles.imgLogo} src={Logo} alt="Terrabellum" />
      </Link>


      <div className={styles.Iconos} >
        <Link
          target="_blank"
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
          target="_blank"
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
          target="_blank"
          className={styles.icon}
          href={"https://facebook.com/TerraBellum_NFT"}
        >
          <ImageHover
            className={styles.svgRedesSociales}
            initialImage={facebook}
            alternativeImage={facebookblue}
          />
        </Link>
        <Link target="_blank" className={styles.icon} href={"tiktok.com"}>
          <ImageHover
            className={styles.svgRedesSociales}
            initialImage={tiktok}
            alternativeImage={tiktokcolor}
          />
        </Link>
        <Link
          target="_blank"
          className={styles.icon}
          href={"https://www.discord.com"}
        >
          <ImageHover
            className={styles.svgRedesSociales}
            initialImage={discord}
            alternativeImage={discordcolor}
          />
        </Link>
      </div>
      <hr className={styles.separador} ></hr>
      <div className={styles.footertext}>
        <p>Todos Los Derechos Reservados © 2023 TerraBellum</p>
      </div>

    </div>
  );
};

// export default Footer;
