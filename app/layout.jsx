// import { Suspense } from "react"
// import {Loading} from "./loading.jsx"
import Header from "@/components/header/Header"
import BtnVoler from "@/components/btnvolver/btonvolver";
// export const metadata = {
//   title: 'TerraBellum',
//   description: 'Generated by Next.js',
//   keywords: 'TerraBellum, terrabellum, Terrabellum, Terra Bellum blockchain, metaverso, videojuego, multijugador, competitivo, aventuras, desafíos',
//   viewport: 'width=device-width, initial-scale=1.0',

// }
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <head>
      <link rel="shortcut icon" href="https://terrabellum.s3.sa-east-1.amazonaws.com/logo_28.webp"/>
      </head>
      {/* <link rel="icon" href="/favicon.ico" type="image/x-icon"/> */}
      <body>
      <Header/>
        {children}
      <BtnVoler/>
      </body>
    </html>
  )
}