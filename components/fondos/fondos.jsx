import styles from '../../styles/index.module.scss'
import dynamic from 'next/dynamic'

export const Fondo1= ()=>{
const D_InicialText = dynamic(() => import("@/components/textbackground1/text.jsx"), {
    ssr: false
  })
const D_Texto = dynamic(() => import("@/components/infocharacters/text.jsx"), {
    ssr: false
  })
  return(
        <div loading="lazy" className={styles.fondo1} id="Home">
          <div
          style={{top:"60vh"}}
          className={styles.margincontain}
          >
          <D_InicialText/>
          </div>
          <div style={{position:"absolute",bottom:"50vh"}}
          className={styles.margincontain}
          id="Characters"
          >
          <D_Texto/>
          </div>
        </div>
  )
}


export const Fondo2= ()=>{
  const D_Infoweapons = dynamic(() => import("@/components/infoweapons/infoweapon"), {
    ssr: false
  })
return(
  <div className={styles.fondo2}>
          <div 
          style={{top:"-30vh"}}
          className={styles.margincontain}>
          <D_Infoweapons/>
          </div>
        </div>
)
}


export const Fondo3= ()=>{
  const D_Nftcartas = dynamic(() => import("@/components/nftcarts/nftcarts.jsx"), {
    ssr: false
  })
return(
  <div className={styles.fondo3}>
        <div
        className={styles.margincontain}>
        <D_Nftcartas/>
        </div>
  </div>
)}

export const Fondo4= ()=>{
  const D_Grafico = dynamic(() => import("@/components/graphic/graphic.jsx"), {
    ssr: false
  })
return(
  <div className={styles.fondo4}>
          <div id="Grafico"
          style={{top:"45%"}}
          >
          <D_Grafico/>
          </div>
        </div>
)}

export const Fondo5= ()=>{
  const D_TextoCloacas = dynamic(() => import("@/components/team/team.jsx"), {
    ssr: false
  })
  const D_Innomictoken = dynamic(() => import("@/components/innomictoken/innomictoken"), {
    ssr: false
  })
return(
  <div className={styles.fondo5}>
          <div
          style={{top:"20%"}}
          className={styles.margincontain}
          id="Innomictoken"
          >
          <D_Innomictoken />
          <D_TextoCloacas />
          </div>
        </div>
)
}