/* eslint-disable @next/next/no-img-element */
import { Layout } from "../Components/Layout/Layout";
import styles from "../styles/productos.module.css";
import {Footer} from '../Components/Footer/Footer' 
import Link from "next/Link";
import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { resetAll } from "../redux/actions";
export default function Productos() {
  const dispatch = useDispatch();
  const rollerClick = useSelector((state) => state.rollerClick);
  const verticalesClick = useSelector((state) => state.verticalesClick);
  const textilesClick = useSelector((state) => state.textilesClick);
  useEffect(() => {
    if(rollerClick === true && window.innerWidth < 400) {
      window.scrollTo({
        top: 100,
        behavior: 'smooth'
    })}
    else if (rollerClick === true) {
      window.scrollTo({
        top: 130,
        behavior: 'smooth'
    })}
    else if(verticalesClick === true && window.innerWidth < 400 ) {
      window.scrollTo({
        top: 854,
        behavior: 'smooth'
    })
    }
    else if(verticalesClick) {
      window.scrollTo({
        top: 424,
        behavior: 'smooth'
    })
    }
    else if (textilesClick === true && window.innerWidth < 400 ) {
      window.scrollTo({
        top: 1470,
        behavior: 'smooth'
    })
    }
    else if (textilesClick === true) {
      window.scrollTo({
        top: 1000,
        behavior: 'smooth'
    })
    }
    dispatch(resetAll());
  }, [dispatch])
  

  return (
    <div className={styles.container}>
         <Head>
        <title>Tu Cortina - Productos</title>
        <meta
          name="description"
          content="Nos dedicamos al diseño y fabricación de
      CORTINAS ENROLLABLES
      de alta calidad, brindamos servicios de colocación e instalación. 
      Cortinas Roller Cortinas BlackOut SunScreen Textiles.
      Victoria Entre Rios, Argentina.
      Fabrica y venta - servicio de alta calidad - variedad y asesoramiento.
      www.tucortina.com.ar - tu cortina"
        />
        <meta httpEquiv="Content-Language" content="es"></meta>
      </Head>
      <Layout>
        <div className={styles.rollersCont}>
          <div className={styles.logoRollersCont}>
            <img src="CortinaRollerLogo.jpg" alt="logoRoller" />
            <div className={styles.rollerH3}>
              <h3>Roller / Estores</h3>
            </div>
          </div>
          <div className={styles.rollerParagraph}>
            <p>
              Los estores son la cortina contemporánea por excelencia, por su
              diseño, fácil manejo, limpieza y capacidad de control solar. En
              TUCORTINA.COM.AR fabricamos a medida la solución que estás
              buscando. Ponemos a tu disposición un amplio catálogo de estores
              confeccionados con una gran diversidad de tejidos y colores
              (opacos, traslúcidos, screen y personalizados) pensados para dar
              una solución decorativa a tus necesidades. Elige tu estor a medida
              entre las más variadas de opciones que te proponemos y si no la
              encuentras, podrás personalizarte tu estor enrollable con imágenes
              y fotografías que quieras, incluso envíanos tu fotografía y te lo
              fabricamos al mejor precio del mercado.
            </p>
          </div>
        </div>
        <div className={styles.verticalesCont}>
          <div className={styles.logoVerticalesCont}>
            <img src="CortinaVerticalLogo.jpg" alt="logoRoller" />
            <div className={styles.verticalesH3}>
              <h3>Verticales</h3>
            </div>
          </div>
          <div className={styles.verticalesParagraph}>
            <p>
              Las cortinas verticales vuelven a estar de moda, no solo para
              cortina de oficina, sino también para el hogar. Las últimas
              tendencias en decoración le han vuelto a dar protagonismo. Su
              facilidad para controlar la luz y privacidad junto con su
              colección de tejidos en diferentes anchos de lama y colorido nos
              proporciona una cortina de estilismo suave, elegante y alargado.
              Cortinas de lamas verticales en tres tipos de tejido: screen,
              traslúcido u opaco.
            </p>
          </div>
        </div>
        <div className={styles.textilesCont}>
          <div className={styles.logoTextilesCont}>
            <img src="CortinaTextilLogo.jpg" alt="logoRoller" />
            <div className={styles.textilesH3}>
              <h3>Textiles Deco</h3>
            </div>
          </div>
          <div className={styles.textilesParagraph}>
            <p>
              Cortinas decorativas confeccionadas a medida con linos gruesos,
              algodones, chenillas y tusor son la mejor opción para decorar tu
              espacio adaptándonos a tu gusto con una gran gama de diseños,
              colores y texturas. Ponemos a tu disposición un amplio catálogo de
              telas que te permitirán escoger el tejido y color adecuado con los
              que fabricaremos la cortina ideal para decorar tu espacio con la
              mejor relación calidad/precio. Con sistemas Europeos / Americanos
            </p>
          </div>
        </div>
        <div>        <Link href="/galeria">
        <div className={styles.navigation}>
      <a>Visitá nuestra galeria</a>
      </div>
      </Link>
      </div>

        <Footer/>
      </Layout>
    </div>
  );
}
