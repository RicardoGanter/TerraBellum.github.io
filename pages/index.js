import Head from 'next/head'
// import { Inter } from '@next/font/google'
// const inter = Inter({ subsets: ['latin'] })
import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/imagenes.module.css'
export default function Home() {
  return (
    <>
    <div className={styles.fondo1}></div>
    <div className={styles.fondo2}></div>
    <div className={styles.fondo3}></div>
    <div className={styles.fondo4}></div>
    <div className={styles.fondo5}></div>
    <Layout titulo="Home">
    
    </Layout>
    </>
  )
}
