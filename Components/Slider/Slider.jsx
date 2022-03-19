import { useState, useEffect } from "react";
import styles from "./slider.module.css";
import styled from "styled-components";

const CarouselImg = styled.img`
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: 1s;
  &.loaded {
    opacity: 1;
  }
`;

export const Slider = () => {
  
  const images = ["/Slider1.jpg", "/Slider2.jpg", "/Slider3.jpg"];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [loaded, setLoaded] = useState(false);

  const selectNewImage = (index, images, next = true) => {
    setLoaded(false);
    setTimeout(() => {
      const condition = next
        ? selectedIndex < images.length - 1
        : selectedIndex > 0;
      const nextIndex = next
        ? condition
          ? selectedIndex + 1
          : 0
        : condition
        ? selectedIndex - 1
        : images.length - 1;
      setSelectedImage(images[nextIndex]);
      setSelectedIndex(nextIndex);
    }, 500);
  };

  //  const previous = () => {
  //    selectNewImage(selectNewImage, images, next = false);
  //  }

  const next = () => {
    selectNewImage(selectedIndex, images);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      selectNewImage(selectedIndex, images, next);
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    
    <div className={styles.container}>
      
      <div className={styles.imagecontainer}>
        <CarouselImg
          src={selectedImage}
          alt="imagen"
          className={loaded ? "loaded" : ""}
          loading="lazy"
          onLoad={() => setLoaded(true)}
        />
      </div>
      <div className={styles.paraghrap}>
        <p>
          Nos dedicamos al diseño y fabricación de <br/>
           CORTINAS ENROLLABLES <br />
            de alta
          calidad, brindamos servicios de colocación e instalación.
        </p>
      </div>
    </div>
  );
};
