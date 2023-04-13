import styles from '../../styles/innomictoken/innomictoken.module.scss'
import Image from 'next/image';
import check from '../../public/check-solid.svg'
import xmark from '../../public/xmark-solid.svg'
import token from '../../public/img/token/token.webp'
const Innomictoken = ()=>{


    return(
        <div className={styles.contain}>
        {/* <div> */}
            {/* <p
            className={styles.text}
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Impedit accusantium distinctio hic, ratione quo blanditiis,
                beatae exercitationem eum,
                atque deserunt nam earum sapiente animi voluptatibus repellendus
                autem delectus temporibus suscipit?</p> */}
        {/* </div> */}

        {/* cambiar div a image  */}
        <div>
            <Image src={token}
            className={styles.imagetoken} alt={"Image tonken"} />
        </div>
        <div>
            <p
            className={styles.text}
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit accusantium distinctio hic, ratione quo blanditiis,
                    beatae exercitationem eum,
                    atque deserunt nam earum sapiente animi voluptatibus repellendus
                    autem delectus temporibus suscipit?</p>
        </div>
        <div className={styles.containtable}>
            <div className={styles.table1}>
                <div>
                    <p className={styles.tf}></p>
                    <Image src={check} alt={"Imgage Check"} className={styles.tf}/>
                    <Image src={check} alt={"Imgage Check"} className={styles.tf}/>
                    <Image src={check} alt={"Imgage Check"} className={styles.tf}/>
                    <Image src={check} alt={"Imgage Check"} className={styles.tf}/>
                </div>
                <div>
                    <p>Innomic Token</p>
                    <p>LIMITED Supply</p>
                    <p>MULTI-GAME token</p>
                    <p>LONG-TERM FOCUSED</p>
                    <p>HIGH DEMAND</p>
                </div>
            </div>
            <div className={styles.table1}>
                <div>
                    <p className={styles.tf}></p>
                    <Image src={xmark} alt={"Imgage Check"} className={styles.tf}/>
                    <Image src={xmark} alt={"Imgage Check"} className={styles.tf}/>
                    <Image src={xmark} alt={"Imgage Check"} className={styles.tf}/>
                    <Image src={xmark} alt={"Imgage Check"} className={styles.tf}/>
                </div>
                <div>
                    <p>Others</p>
                    <p>UNLIMITED Supply</p>
                    <p>SINGLE-GAME token</p>
                    <p>LONG-TERM FOCUSED</p>
                    <p>SPECULATIVE DEMAND</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Innomictoken;