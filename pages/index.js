import Head from 'next/head'
// import { Inter } from '@next/font/google'
// const inter = Inter({ subsets: ['latin'] })
import Link from 'next/link'
import Layout from '../components/layout'
import Image from 'next/image'
import espacio from '../public/espacio.png'
import styles from '../styles/home.module.css'
import Texto from '@/components/texto'


export default function Home() {
  return (
    <>
    <Layout titulo="Home">
    </Layout>
    <Texto/>
    {/* <div className={styles.fondo}  >
    {/* <div style={{display: 'block', width: 900}}> */}
      {/* <Image src={espacio} alt='lol' Layout='responsive' quality={100}/>
    </div>   */} 
    </>
  )
}
