/* eslint-disable @next/next/no-img-element */
import styles from './Footer.module.css'
import Link from "next/Link";
export const Footer = () => {
    return (
        <div className={styles.generalDiv}>
        <div className={styles.blueDiv}>
        <div className={styles.leftCategory}>
        <div className={styles.logoytexto}>
        <img src="logoCortinasRoller.png" alt="logo"  loading="lazy" />
            <p> WWW.TUCORTINA.COM.AR </p>
        </div>
        <div className={styles.secondaryText}>
            <p>BLACKOUT / SCREEN / TRASLÚCIDA / TEXTILES</p>
        </div>
        </div>
        <div className={styles.rigthCategory}>
            <Link href="https://wa.me/message/AJSC667CAEH4E1">
        <div className={styles.whatsapp}>
            <img src="whatsapp.png" alt="whatsappIcon"  loading="lazy"/>
            <p>3436 - 439202</p>
        </div>
        </Link>
        <Link href="https://www.facebook.com/cortinasrollervictoria">
        <div className={styles.facebook}>
            <img src="facebook.png" alt="facebookLogo"  loading="lazy"/>
            <p>CortinasRollerVictoria</p>
        </div>
        </Link>
        <Link href="https://www.instagram.com/tu_cortina/">
        <div className={styles.instagram}>
            <img src="instagram.png" alt="instagramLogo"  loading="lazy"/>
            <p>@tu_cortina</p>
        </div>
        </Link>
            <Link href="https://www.google.com/maps/search/tu+cortina/@-32.6268818,-60.1493596,17z">
        <div className={styles.location}>
            <img src="gps.png" alt="gpsIcon"  loading="lazy"/>
            <p>Camoirano 472 - Victoria - <br /> Entre Rios - Argentina</p>
        </div>
            </Link>
        </div>
        </div>
        <div className={styles.yellowDiv}>
            <p>Desarrollado por Augusto Iphar. Desarrollador Web Full-Stack</p>
            <Link href="https://www.linkedin.com/in/augustofrx/">
            <img src="linkedin.png" alt="linkedInLogo"  loading="lazy"/>
            </Link>
            <Link href="https://github.com/Augustofrx">
            <img src="github.png" alt="githubLogo"  loading="lazy"/>
            </Link>
            <Link href="http://wa.me/message/T6FW7VCSJQTNA1">
            <img src="whatsapp2.png" alt="whatsappLogo"  loading="lazy"/>
            </Link>
        </div>
        </div>
    )
}