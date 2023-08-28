"use client"
import styles from '../../styles/btnvolver/btnvolver.module.scss'
import uparrow from '../../public/up-arrow-solid.svg'
import Image from 'next/image';
const BtnVoler = ()=>{
      const Scrollclick = (id) => {
        const element = document.getElementById(id);
        if (element) {
          window.scrollBy({ top: element.getBoundingClientRect().top - 110, behavior: "smooth" });
        }
      };

    return(
        <div className={styles.btn} onClick={()=>Scrollclick('Home')}>
            <Image src={uparrow} alt="uparrow" width={35} height={30}/>
        </div>
    )
}

export default BtnVoler