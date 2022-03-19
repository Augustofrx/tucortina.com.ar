/* eslint-disable @next/next/no-img-element */
import { Layout } from "../Components/Layout/Layout";
import styles from "../styles/galeria.module.css";
import { Footer } from "../Components/Footer/Footer";
import Head from "next/head";




export default function Galeria() {


  const rollerScreen = [
    "RollerScreen1.jpg",
    "RollerScreen2.jpg",
    "RollerScreen3.jpg",
    "RollerScreen4.jpg",
    "RollerScreen5.jpg",
    "RollerScreen6.jpg",
  ];
  const rollerBlackout = [
    "RollerBlackout1.jpg",
    "RollerBlackout2.jpg",
    "RollerBlackout3.jpg",
    "RollerBlackout4.jpg",
  ];
  const verticales = [
    "Verticales1.jpg",
    "Verticales2.jpg",
    "Verticales3.jpg",
    "Verticales4.jpg",
    "Verticales5.jpg",
    "Verticales6.jpg",
  ];

  const textilesDeco = [
    "Textiles1.jpg",
    "Textiles2.jpg",
    "Textiles3.jpg",
    "Textiles4.jpg",
    "Textiles5.jpg",
    "Textiles6.jpg",
  ];
  return (
    <div className={styles.container}>
      <Head>
        <title>Tu Cortina - Galeria</title>
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
        <div className={styles.rollerScreenCont}>
          <div className={styles.title1}>
            <h2> Roller / Screen</h2>
          </div>
          <div className={styles.rollerScreenImgs}>
            {rollerScreen.map((img) => (
              <img src={img} alt="photo" loading="lazy" key={img} />
            ))}
          </div>
        </div>
        <div className={styles.rollerBlackoutCont}>
          <div className={styles.title2}>
            <h2> Roller / Blackout</h2>
          </div>
          <div className={styles.rollerBlackoutImgs}>
            {rollerBlackout.map((img) => (
              <img src={img} alt="photo" loading="lazy" key={img} />
            ))}
          </div>
        </div>
        <div className={styles.verticalesCont}>
          <div className={styles.title3}>
            <h2>Cortinas Verticales</h2>
          </div>
          <div className={styles.verticalesImgs}>
            {verticales.map((img) => (
              <img src={img} alt="photo" key={img} />
            ))}
          </div>
        </div>
        <div className={styles.textilesCont}>
          <div className={styles.title4}>
            <h2>Cortinas Textiles Decorativas</h2>
          </div>
          <div className={styles.textilesImgs}>
            {textilesDeco.map((img) => (
              <img src={img} alt="photo" key={img} />
            ))}
          </div>
        </div>
        <Footer />
      </Layout>
    </div>
  );
}
