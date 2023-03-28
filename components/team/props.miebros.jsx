import Image from "next/image";
import styles from "../../styles/team/props.team.module.scss";
import iconoLinkedin from "../../public/icon/linkedin.svg";
import Link from "next/link";

const PropsMiembros = ({ imagen, nombre, cargo, linkedin }) => {
  return (
    <div className={styles.containinfo}>
      <Image className={styles.img} src={imagen} alt="imagen de perfil" />
      <p>{nombre}</p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{fontSize:'1.4rem', maxWidth:'110px'}}>{cargo}</div>
        <Link href={`${linkedin}`} target="_blank">
          <Image
            src={iconoLinkedin}
            style={{
              width: "40px",
              height: "40px",
              margin: "0 1rem",
              cursor: "pointer",
            }}
            alt="Linkedin icon"
          />
        </Link>
      </div>
    </div>
  );
};
export default PropsMiembros;
