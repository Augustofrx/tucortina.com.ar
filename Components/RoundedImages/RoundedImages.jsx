/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import styles from "./RoundedImages.module.css";
import Link from "next/Link";

export const RoundedImages = () => {
  return (
<div className={styles.contenedor}>
<div className={styles.roundedImages}>
      <div className={styles.rollerContainer}>
        <div className={styles.cortinasRoller}>
            <img src="CortinaRollerLogo.jpg" alt="cortinaRollerLogo" />
        </div>
        <a>CORTINAS ROLLER</a>
      </div>
      <div className={styles.verticalesContainer}>
        <div className={styles.cortinasVerticales}>
            <img src="CortinaVerticalLogo.jpg" alt="cortinaVerticalLogo" />
        </div>
        <a>CORTINAS VERTICALES</a>
      </div>
      <div className={styles.textilesContainer}>
        <div className={styles.cortinasTextiles}>
            <img src="CortinaTextilLogo.jpg" alt="cortinaTextilLogo" />
        </div>
        <a>CORTINAS TEXTILES</a>
      </div>
    </div>
    <div>
      <Link href="/productos">
        <div className={styles.navigation}>
      <a>Conocé más sobre nuestros productos</a>
      </div>
      </Link>
      </div>
      </div>
  );
};
