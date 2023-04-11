import styles from '../../styles/innomictoken/innomictoken.module.scss'

const Innomictoken = ()=>{


    return(
        <div className={styles.contain}>
        <div>
            <p
            className={styles.text}
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Impedit accusantium distinctio hic, ratione quo blanditiis,
                beatae exercitationem eum,
                atque deserunt nam earum sapiente animi voluptatibus repellendus
                autem delectus temporibus suscipit?</p>
        </div>

        {/* cambiar div a image  */}
        <div>
            <div className={styles.imagetoken}></div>
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
                    <p>O</p>
                    <p>L</p>
                    <p>L</p>
                    <p>N</p>
                </div>
                <div>
                    <p>Axie infity</p>
                    <p>peruano maximo</p>
                    <p>peruano maximo</p>
                    <p>peruano maximo</p>
                    <p>peruano maximo</p>
                </div>
            </div>
            <div className={styles.table1}>
                <div>
                    <p>O</p>
                    <p>L</p>
                    <p>L</p>
                    <p>N</p>
                </div>
                <div>
                    <p>Terrabellum</p>
                    <p>peruano maximo</p>
                    <p>peruano maximo</p>
                    <p>peruano maximo</p>
                    <p>peruano maximo</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Innomictoken;