/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import styles from "./RoundedImages.module.css";
import Link from "next/Link";
import { rollersClick, textilesClick, verticalesClick } from "../../redux/actions";
import { useDispatch } from "react-redux";

export const RoundedImages = () => {
  const dispatch = useDispatch();

  function handleRollerClick() {
    dispatch(rollersClick());
  }

  function handleVerticalesClick() {
    dispatch(verticalesClick())
  }

  function handleTextilesClick() {
    dispatch(textilesClick())
  }

  return (
    <div className={styles.contenedor}>
      <div className={styles.roundedImages}>
        <div className={styles.rollerContainer}>
          <div className={styles.cortinasRoller}>
            <Link href="/productos.html">
              <img
                src="CortinaRollerLogo.jpg"
                alt="cortinaRollerLogo"
                onClick={(e) => handleRollerClick(e)}
              />
            </Link>
          </div>
          <a>CORTINAS ROLLER</a>
        </div>
        <div className={styles.verticalesContainer}>
          <div className={styles.cortinasVerticales}>
            <Link href='/productos.html'>
            <img src="CortinaVerticalLogo.jpg" alt="cortinaVerticalLogo" onClick={(e) => handleVerticalesClick(e)} />
            </Link>
          </div>
          <a>CORTINAS VERTICALES</a>
        </div>
        <div className={styles.textilesContainer}>
          <div className={styles.cortinasTextiles}>
            <Link href='/productos.html'>
            <img src="CortinaTextilLogo.jpg" alt="cortinaTextilLogo"  onClick={(e) => handleTextilesClick(e)}/>
            </Link>
          </div>
          <a>CORTINAS TEXTILES</a>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
};
