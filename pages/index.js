import Head from 'next/head'
// import { Inter } from '@next/font/google'
// const inter = Inter({ subsets: ['latin'] })
import Link from 'next/link'
import Layout from '../components/layout'
import Image from 'next/image'
import espacio from '../public/espacio.png'
import styles from '../styles/home.module.css'
export default function Home() {
  return (
    
    <>
    <button className='btn btn-primary'>boton de inicio</button>
    <Layout titulo="Home">

    </Layout>
    {/* <Image src="/espacio.png" alt='fondo de la galaxia' Layout='responsive'  objetFit='cover' width={13000 / 10} height={90000 / 10}/> */}

    <div className={styles.fondo}  >
      <Image src={espacio} alt='lol' Layout='relative' quality={20}/>
    </div>
    
    </>
   
  )
}
