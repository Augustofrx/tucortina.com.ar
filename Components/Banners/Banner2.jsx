/* eslint-disable @next/next/no-img-element */
import styles from './Banner2.module.css'

export const Banner2 = () => {
    return (
            <div className={styles.banner2Container}>
            <img src="fotoBanner2.jpg" alt="fotoBanner2"  loading="lazy" />
            <div className={styles.pylContainer}>
            <div className={styles.p1LogoContainer}>
            <img src="logoCortinasRoller.png" alt="logo"  loading="lazy" />
            <p>WWW.TUCORTINA.COM.AR</p>
             </div>
             <div className={styles.p2Container}>
                FABRICA Y VENTA <br />
                Contamos con una amplia trayectoria en fabricación y venta. <br />
                Variedad de opciones y asesoramiento para tu elección.
                </div>
                </div>
            </div>
    )
}