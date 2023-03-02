import styles from "../styles/nftcartas.module.scss";
import PropsNftcartas from "./props/props.nftcartas";
const Nftcartas = () => {
  return (
    <div className={styles.contain}>
      <div className={styles.infotexto}>
        lalalalalalaaaaaalalalalalaalal lalaalalaalalalalalalalalala
        alalalallalalala
      </div>
      <div className={styles.cards_grid}>
        <PropsNftcartas colorInit="red" colorfin="red" textinit="loool" />

        <PropsNftcartas colorInit="red" />

        <PropsNftcartas colorInit="red" />
      </div>
    </div>
  );
};

export default Nftcartas;
