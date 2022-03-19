/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from "../styles/container.module.css";
import { Layout } from "../Components/Layout/Layout";
import { Spliter } from "../Components/Spliters/Spliter";
import { Slider } from "../Components/Slider/Slider";
import { RoundedImages } from "../Components/RoundedImages/RoundedImages";
import { Banner1 } from "../Components/Banners/Banner1";
import { Banner2 } from "../Components/Banners/Banner2";
import { Footer } from "../Components/Footer/Footer";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tu Cortina - Inicio</title>
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
        <Slider />
        <Spliter />
        <RoundedImages />
        <Spliter />
        <Banner1 />
        <Spliter />
        <Banner2 />
        <Spliter />
        <Footer />
      </Layout>
    </div>
  );
}
