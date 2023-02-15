import { useState } from 'react';
import styles from '../styles/nftcartas.module.css'
const Rectangulo = ({ colorInicial, colorFinal, textoInicial, textoFinal }) =>{
  const [texto, setTexto] = useState(textoInicial);

  function handleMouseOver() {
    setTexto(textoFinal);
  }

  function handleMouseOut() {
    setTexto(textoInicial);
  }

  return (
    <>
    <div  className={styles.card_front} style={{ backgroundColor: colorInicial }} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <div  className={styles.card_back} style={{ backgroundColor: colorFinal }}></div>
      <p  className={styles.text_inferior}>{texto}</p>
    </div>
    <p  className={styles.text_inferior}>{texto}</p>
    </>

    
  );
}

export default Rectangulo;