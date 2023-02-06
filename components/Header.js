import Link from "next/link";
import styles from "../styles/Header.module.css"

const Header = () =>{
    return(
        <div className={styles.Header}>
            <div className={styles.contenedor}>
                
                <Link href="/">home</Link>
                <Link href="/">home</Link>
                <Link href="/">home</Link>

            </div>
        </div>
    )
}

export default Header;