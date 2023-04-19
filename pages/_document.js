import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {
  return (
    <Html lang="en">
        <Head>
          <meta name="author" content="Ricardo Rosales, Enzo Vergara"/>
          <meta name="description" content="TerraBellum es un emocionante videojuego multijugador competitivo basado
           en blockchain y ambientado en un metaverso en constante evolución. Únete a una comunidad de jugadores apasionados
            mientras exploras un mundo virtual lleno de aventuras y desafíos. Descubre lo que hace que TerraBellum sea único 
            y por qué es el futuro de los videojuegos en línea" />
          <meta name="keywords" 
          content="TerraBellum, terrabellum, Terrabellum, Terra Bellum blockchain, metaverso, videojuego, multijugador, competitivo, aventuras, desafíos"/>
          <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
        </Head>
        <Main />
        <NextScript />
    </Html>
  )
}