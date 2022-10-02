import React from "react";
import styles from "./Event.module.css";
import { AppImages } from "../../assets";
import ImageComponent from "../../components/ImageComponent/ImageComponent";

const Event = () => {
  return (
    <div className={styles.events}>
      <div className={styles.eventView}>
        <h2>Birthday Bash</h2>
        <p>
          Hosted by <span>Elysia</span>
        </p>
        <div className={styles.info}>
          <div className={styles.date}>
            <div className={styles.icon}>Icon</div>
            <div className={styles.datetime}>
              <span className={styles.from}>18 August 6:00PM</span>
              <span className={styles.to}>to 19 August 1:00PM UTC +10</span>
            </div>
          </div>
          <div className={styles.location}>
            <div className={styles.icon}>Icon</div>
            <div className={styles.locate}>
              <span className={styles.streetName}>Street name</span>
              <span className={styles.postal}>Suburb, State, Postcode</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.CAKE_IMG}>
        <ImageComponent imageSrc={AppImages.CAKE_IMG} />
      </div>
    </div>
  );
};

export default Event;
