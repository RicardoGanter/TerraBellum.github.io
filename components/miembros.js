import styles from "../styles/textoCloacas.module.scss";
import PropsMiembros from "./props/props.miebros";
import Team from "@/public/img/ourteam/team";
const TextoCloacas = () => {
  return (
    <div className={styles.containmain}>
      <h2 className={styles.texto}>Owners</h2>

      <div className={styles.contain}>
        <PropsMiembros
          nombre="Felipe Araya"
          cargo="CEO"
          imagen={Team.felipeA}
          linkedin={
            "https://www.linkedin.com/in/felipe-araya-hernandez-682b11191/"
          }
        />
        <PropsMiembros
          nombre="Diego Cordero"
          cargo="CTO"
          imagen={Team.diegoCA}
          linkedin={"https://www.linkedin.com/in/diego-cordero-5290221ab/"}
        />
        <PropsMiembros
          nombre="Ricardo Rosales"
          cargo="CTO"
          imagen={Team.ricardoRG}
          linkedin={"https://www.linkedin.com/in/ricardo-adolfo-rosales-ganter-03362b242/"}
        />
        <PropsMiembros
          nombre="Fabio Canales"
          cargo="CMO"
          imagen={Team.fabioC}
          linkedin={"https://www.linkedin.com/in/fabio-antonio-canales-bustamante-94757221b/"}
        />
        <PropsMiembros
          nombre="Claudio Chuhaicura"
          cargo="Full stack development"
          imagen={Team.claudioCH}
          linkedin={"https://www.linkedin.com/in/claudio-chuhaicura-a41b77208/"}
        />
        <PropsMiembros
          nombre="Isaac Encalada"
          cargo="NOC"
          imagen={Team.isaacE}
          linkedin={"https://www.linkedin.com/in/isaac-encalada-ruz-8493a626b/"}
        />
        <PropsMiembros
          nombre="Daniel Novoa"
          cargo="Gerente general"
          imagen={Team.danielN}
          
        />
      </div>
    </div>
  );
};

export default TextoCloacas;
