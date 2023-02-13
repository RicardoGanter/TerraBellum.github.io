import styles from '../styles/footer.module.css'
import Image from 'next/image';
import discord from '../public/icon/discordgris.svg'
import instagram from '../public/icon/instagram.svg'
import tiktok from '../public/icon/tiktok.svg'
import facebook from '../public/icon/facebookgris.svg'
import twiter from '../public/icon/twiter.svg'
import TB from '../public/img/tb.png'
import Link from 'next/link';
import ImageHover from './imagenRsociales';
import { useState } from 'react';

const Footer = ()=>{
    
    return(
        <>
            <div className={styles.redesSociales}>
                <Link href={'/'}><Image src={TB} width={350} alt='Terrabellum'/></Link>
                <div>
                <Link href={'https://www.instagram.com/Terra_Bellum/'} ><ImageHover className={styles.svgRedesSociales}
                initialImage={instagram} alternativeImage={discord} /></Link>
                <Link href={'https://www.instagram.com/Terra_Bellum/'}><ImageHover className={styles.svgRedesSociales}
                initialImage={instagram} alternativeImage={discord}/></Link>
                <Link href={'https://twitter.com/TerraBellum_NFT'}><ImageHover className={styles.svgRedesSociales}
                initialImage={instagram} alternativeImage={discord}/></Link>
                <Link href={'google.com'}><ImageHover className={styles.svgRedesSociales}
                initialImage={instagram} alternativeImage={discord}/></Link>
                <Link href={'https://www.facebook.com/profile.php?id=100082027137863'}><ImageHover className={styles.svgRedesSociales}
                initialImage={instagram} alternativeImage={discord}/></Link>
                </div>
            
            <div className={styles.footertext}>
                <Link className={styles.enlacesfooter} href={"https://terrabellum.gitbook.io/whitepaper-terrabellum/"}>Whitepaper</Link>
                <Link className={styles.enlacesfooter} href={"youtube.com"}>FAQ</Link>
                <Link className={styles.enlacesfooter} href={"youtube.com"}>Privacy Policy</Link>
                <Link className={styles.enlacesfooter} href={"youtube.com"}>Terms of Use</Link>
            </div>
            </div>
        </>
)}

export default Footer;