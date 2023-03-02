import styles from "../../styles/texto.module.css";
import { useState, useEffect, useRef } from "react";
const AnimacionScroll = () => {
  const [animacion, setAnimacion] = useState("red");
  const divRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const div = divRef.current;
      const { y } = div.getBoundingClientRect();

      const backgroundColor = y <= 300 ? null : null;
      setAnimacion(backgroundColor);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* <div ref={divRef} style={{height: "180vh", background}}> */}
      <div ref={divRef} className={styles.texto2} style={{}}>
        <h2>
          + de 28 armas te esperan, puedes desbloquearlas jugando partidas o
          ganando innomictokens. Usalas de manera estrategica y conoce bien sus
          consecuencias.
        </h2>
      </div>
    </>
  );
};
export default AnimacionScroll;
