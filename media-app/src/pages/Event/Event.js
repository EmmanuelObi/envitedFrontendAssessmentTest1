import React from "react";
import styles from "./Event.module.css";
import { AppImages } from "../../assets";
import ImageComponent from "../../components/ImageComponent/ImageComponent";
import { useSelector } from "react-redux";

const Event = () => {
  const {
    form: { formData },
  } = useSelector((state) => state);

  const { eventName, hostName, startDate, endDate, location } = formData ?? {};

  console.log(new Date(startDate));
  return (
    <div className={styles.events}>
      <div className={styles.eventView}>
        <h2>{eventName ?? ""}</h2>
        <p>
          Hosted by <span>{hostName ?? ""}</span>
        </p>
        <div className={styles.info}>
          <div className={styles.date}>
            <div className={styles.icon}>Icon</div>
            <div className={styles.datetime}>
              <span className={styles.from}>{`${new Date(
                startDate
              ).toDateString()}`}</span>
              <br />
              <span className={styles.to}>
                &nbsp; to {`${new Date(endDate).toDateString()}`}
              </span>
            </div>
          </div>
          <div className={styles.location}>
            <div className={styles.icon}>Icon</div>
            <div className={styles.locate}>
              <span className={styles.streetName}>{location ?? ""}</span>
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
