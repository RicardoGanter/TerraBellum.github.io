import styles from '../styles/textoCloacas.module.css'
import PropsMiembros from './props/props.miebros'
import Team from '@/public/img/ourteam/team'
const TextoCloacas = ()=>{
    return(
        <div>
            <h2 className={styles.texto}>Team</h2>
        <div className={styles.contain} >
            <PropsMiembros nombre="Felipe Araya" cargo="CEO" imagen={Team[2]} linkedin={"https://www.linkedin.com/in/felipe-araya-hernandez-682b11191/"}/>
            <PropsMiembros nombre="Ricardo Rosales" cargo="CTO" imagen={Team[1]}/>
            <PropsMiembros nombre="Fabio Canales" cargo="CMO" imagen={Team[3]}/>
            <PropsMiembros nombre="Claudio Chuahicura" cargo="Full stack development" imagen={Team[0]} />
        </div>
        </div>

    )
}

export default TextoCloacas;