import React from "react";
import ImageComponent from "../../components/ImageComponent/ImageComponent";
import styles from "./LandingPage.module.css";
import { AppImages } from "../../assets/index";
import useScreenWidth from "../../hooks/useScreenWidth";

const LandingPage = () => {
  const screenWidth = useScreenWidth();

  return (
    <div className={styles.LandingPage}>
      {screenWidth <= 990 && (
        <button className={styles.action_button}>🎉 Create my event</button>
      )}
      <div className={styles.LP_IMG}>
        <ImageComponent imageSrc={AppImages.LP_IMG} />
      </div>
      <div className={styles.call_to_action}>
        <h2>
          Imagine if <br /> <span>Snapchat </span> <br />
          had events.
        </h2>
        <p>
          Easily host and share events with your friends across any social
          media.
        </p>

        {screenWidth > 990 && (
          <button className={styles.action_button}>🎉 Create my event</button>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
