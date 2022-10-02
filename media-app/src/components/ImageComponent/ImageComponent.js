import React from "react";
import styles from "./ImageComponent.module.css";

const ImageComponent = ({ imageSrc, imageAlt }) => {
  return <img className={styles.image} src={imageSrc} alt={imageAlt} />;
};

export default ImageComponent;
