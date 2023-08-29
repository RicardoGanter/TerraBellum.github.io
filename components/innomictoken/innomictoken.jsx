import styles from '../../styles/innomictoken/innomictoken.module.scss'
import Image from 'next/image';
import check from '../../public/check-solid.svg'
import xmark from '../../public/xmark-solid.svg'
import token from '../../public/img/token/token.webp'
const Innomictoken = ()=>{


    return(
        <div className={styles.contain}>
            <div>
                <Image src={token} className={styles.imagetoken} alt={"Image tonken"} />
            </div>
            <div>
                <p className={styles.text} >Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Impedit accusantium distinctio hic, ratione quo blanditiis,
                        beatae exercitationem eum,
                        atque deserunt nam earum sapiente animi voluptatibus repellendus
                        autem delectus temporibus suscipit?</p>
            </div>
            <div className={styles.containtable}>
                <div className={styles.table1}>   
                        <div> 
                            <p>Innomic Token</p> 
                        </div>
                        <div>
                            <Image src={check} alt={"Imgage Check"} className={styles.tf}/> 
                            <p>LIMITED Supply</p>
                        </div>
                        <div>
                            <Image src={check} alt={"Imgage Check"} className={styles.tf}/> 
                            <p>MULTI-GAME token</p>
                        </div>
                        <div>
                            <Image src={check} alt={"Imgage Check"} className={styles.tf}/> 
                            <p>LONG-TERM FOCUSED</p>
                        </div>  
                        <div>
                            <Image src={check} alt={"Imgage Check"} className={styles.tf}/> 
                            <p>HIGH DEMAND</p>  
                        </div>  
                </div>
                <div className={styles.table1}>
                    <div>  
                        <p>Others</p>
                    </div>
                    <div> 
                        <Image src={xmark} alt={"Imgage Check"} className={styles.tf}/> 
                        <p>UNLIMITED Supply</p>
                    </div> 
                    <div> 
                        <Image src={xmark} alt={"Imgage Check"} className={styles.tf}/> 
                        <p>SINGLE-GAME token</p>
                    </div> 
                    <div> 
                        <Image src={xmark} alt={"Imgage Check"} className={styles.tf}/> 
                        <p>LONG-TERM FOCUSED</p>
                    </div> 
                    <div> 
                        <Image src={xmark} alt={"Imgage Check"} className={styles.tf}/> 
                        <p>SPECULATIVE DEMAND</p> 
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Innomictoken;