import Layout from "../components/layout";
import Texto from "@/components/texto.js";
import Footer from "@/components/footer";
import TextoCloacas from "@/components/miembros";
import Nftcartas from "@/components/nftcartas.jsx";
import InicialText from "@/components/inicialTexto";
import Grafico from "@/components/grafico.jsx";
// import Chart from "@/components/Chart";
export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Layout titulo="Home">
        <InicialText />
        <Texto />
        {/* <Chart /> */}
        <Nftcartas />
        <Grafico/>
        <TextoCloacas />
      </Layout>
    </div>
  );
}
