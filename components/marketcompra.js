import PropsNftcartas from "./props/propsnftcartas"
import styles from '../src/styles/marketcompra.module.css'
const Marketcompra = ()=>{
    return(
        <div className={styles.contain}>
            <PropsNftcartas texto='Red Spectre'/>
            <PropsNftcartas texto='Red Spectre'/>
            <PropsNftcartas texto='Red Spectre'/>
            <PropsNftcartas texto='Red Spectre'/>
            <PropsNftcartas texto='Red Spectre'/>
            <PropsNftcartas texto='Red Spectre'/>
            <PropsNftcartas texto='Red Spectre'/>
        </div>
    )
}
export default Marketcompra;