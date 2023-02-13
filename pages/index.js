import Head from "next/head";
// import { Inter } from '@next/font/google'
// const inter = Inter({ subsets: ['latin'] })
import Link from 'next/link'
import Layout from '../components/layout'
import Image from 'next/image'
import styles from '../styles/home.module.css'
import Texto from '@/components/texto.jsx'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
    <Layout titulo="Home"/>
    <Texto/>
    <Footer/>
    </>
  )
}
