/* eslint-disable @next/next/no-img-element */
import styles from './Banner1.module.css'



export const Banner1 = () => {
    return (
            <div className={styles.banner1Container}>
            <img src="fotoBanner1.jpg" alt="fotoBanner1"  loading="lazy"/>
            <div className={styles.pcontainer}>

            <p className={styles.parrafo1}>INSTALAMOS CORTINAS ROLLER
             EN TODA LA REGION</p>
            <p className={styles.parrafo2}>
                BLACKOUT / SCREEN / TRASLÚCIDA / TEXTILES
                </p> 
            </div>
            </div>
    )
}