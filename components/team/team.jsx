import styles from "../../styles/team/team.module.scss";
import PropsMiembros from "./props.miebros";
import Team from "@/public/img/ourteam/team";
const TextoCloacas = () => {
  return (
    <div className={styles.containmain}>
      <h2 className={styles.texto}>Founders</h2>

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
          cargo="Blockchain director"
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
          nombre="Daniel Novoa"
          cargo="CCO"
          imagen={Team.danielN}
          linkedin={"https://www.linkedin.com/in/daniel-novoa-vega-17942826b/"}
        />
        <PropsMiembros
          nombre="Fabio Canales"
          cargo="CMO"
          imagen={Team.fabioC}
          linkedin={"https://www.linkedin.com/in/fabio-antonio-canales-bustamante-94757221b/"}
        />
      </div>
    </div>
  );
};

export default TextoCloacas;
