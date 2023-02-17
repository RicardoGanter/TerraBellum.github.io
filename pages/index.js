import Layout from '../components/layout'
import Texto from '@/components/texto.jsx'
import Footer from '@/components/footer'
import TextoCloacas from "@/components/miembros";
import Nftcartas from "@/components/nftcartas.jsx";
import InicialText from "@/components/inicialTexto";
export default function Home() {
  return (
    <>
    <Layout titulo="Home"/>
    <InicialText/>
    <Texto/>
    <Nftcartas/>
    <TextoCloacas/>
    <Footer/>
    </>
  )
}
