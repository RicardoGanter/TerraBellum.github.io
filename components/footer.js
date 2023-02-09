import styles from '../styles/footer.module.css'
import Image from 'next/image';
import discord from '../public/icon/discord.svg'
import instagram from '../public/icon/instagram.svg'
import tiktok from '../public/icon/tiktok.svg'
import facebook from '../public/icon/facebook.svg'
import twiter from '../public/icon/twiter.svg'
import TB from '../public/img/tb.png'
import Link from 'next/link';

const Footer = ()=>{
    return(
        <>
        
            <div className={styles.redesSociales}>
                <Image src={TB} width={400} alt='Terrabellum'/>
                <div>
                <Link href={'https://www.instagram.com/Terra_Bellum/'}><Image className={styles.svgRedesSociales} src={discord} width={40} magin-rigth={100} alt='discord'/></Link>
                <Link href={'https://www.instagram.com/Terra_Bellum/'}><Image className={styles.svgRedesSociales} src={instagram} width={40}alt='instagram'/></Link>
                <Link href={'https://twitter.com/TerraBellum_NFT'}><Image className={styles.svgRedesSociales} src={twiter} width={40} alt='twiter'/></Link>
                <Link href={'google.com'}><Image className={styles.svgRedesSociales} src={tiktok} width={40} alt='tiktok'/></Link>
                <Link href={'https://www.facebook.com/profile.php?id=100082027137863'}><Image className={styles.svgRedesSociales} src={facebook} width={40} alt='facebook'/></Link>
                </div>
            
            <div className={styles.footertext}>
                <Link className={styles.enlacesfooter} href={"youtube.com"}>Whitepaper</Link>
                <Link className={styles.enlacesfooter} href={"youtube.com"}>FAQ</Link>
                <Link className={styles.enlacesfooter} href={"youtube.com"}>Privacy Policy</Link>
                <Link className={styles.enlacesfooter} href={"youtube.com"}>Terms of Use</Link>
            </div>
            </div>
        </>
)}

export default Footer;