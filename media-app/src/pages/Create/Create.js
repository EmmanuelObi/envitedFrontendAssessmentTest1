import React from "react";
import styles from "./Create.module.css";
import { Link } from "react-router-dom";
import useInput from "../../hooks/useInput";
import { validators } from "../../helpers/validator";
import { useDispatch, useSelector } from "react-redux";
import { formActions } from "../../state/formSlice";

const Create = () => {
  const dispatch = useDispatch();
  const {
    form: { formData },
  } = useSelector((state) => state);
  const {
    value: eventPhoto,
    valueInputChange: eventPhotoValueInputChange,
    inputBlurHandler: eventPhotoInputBlurHandle,
    valueIsValid: eventPhotoValueIsValid,
    clearInputValue: eventPhotoClear,
  } = useInput(validators.checkValueIsEmpty, "");
  const {
    value: eventName,
    valueInputChange: eventNameValueInputChange,
    inputBlurHandler: eventNameInputBlurHandle,
    valueIsValid: eventNameValueIsValid,
    clearInputValue: eventNameClear,
  } = useInput(validators.checkValueIsEmpty, "");
  const {
    value: hostName,
    valueInputChange: hostNameValueInputChange,
    inputBlurHandler: hostNameInputBlurHandle,
    valueIsValid: hostNameValueIsValid,
    clearInputValue: hostNameClear,
  } = useInput(validators.checkValueIsEmpty, "");
  const {
    value: startDate,
    valueInputChange: startDateValueInputChange,
    inputBlurHandler: startDateInputBlurHandle,
    valueIsValid: startDateValueIsValid,
    clearInputValue: startDateClear,
  } = useInput(validators.checkValueIsEmpty, "");
  const {
    value: endDate,
    valueInputChange: endDateValueInputChange,
    inputBlurHandler: endDateInputBlurHandle,
    valueIsValid: endDateValueIsValid,
    clearInputValue: endDateClear,
  } = useInput(validators.checkValueIsEmpty, "");
  const {
    value: location,
    valueInputChange: locationValueInputChange,
    inputBlurHandler: locationInputBlurHandle,
    valueIsValid: locationValueIsValid,
    clearInputValue: locationClear,
  } = useInput(validators.checkValueIsEmpty, "");

  const formIsValid =
    eventNameValueIsValid &&
    eventPhotoValueIsValid &&
    hostNameValueIsValid &&
    locationValueIsValid &&
    startDateValueIsValid &&
    endDateValueIsValid;

  const clearAllInput = () => {
    eventNameClear();
    eventPhotoClear();
    hostNameClear();
    locationClear();
    startDateClear();
    endDateClear();
  };

  const handleFormSubmit = () => {
    if (!formIsValid) return;

    const data = {
      eventPhoto,
      eventName,
      hostName,
      startDate,
      endDate,
      location,
    };

    dispatch(formActions.setFormData(data));

    clearAllInput();
    console.log({ formData });
  };
  return (
    <div className={styles.createEvent}>
      <form className={styles.form}>
        <h2>Enter event details</h2>
        <div className={styles.inputs}>
          <div className={styles.formGroup}>
            <label>Event Photo:</label>
            <input
              type="file"
              placeholder="Enter event name"
              value={eventPhoto}
              onChange={eventPhotoValueInputChange}
              onBlur={eventPhotoInputBlurHandle}
            ></input>
          </div>
          <div className={styles.formGroup}>
            <label>Event Name:</label>
            <input
              type="text"
              placeholder="Enter event name"
              value={eventName}
              onChange={eventNameValueInputChange}
              onBlur={eventNameInputBlurHandle}
            ></input>
          </div>
          <div className={styles.formGroup}>
            <label>Host Name:</label>
            <input
              type="text"
              placeholder="Enter host name"
              value={hostName}
              onChange={hostNameValueInputChange}
              onBlur={hostNameInputBlurHandle}
            ></input>
          </div>
          <div className={styles.formGroup}>
            <label>Start Date:</label>
            <input
              type="datetime-local"
              placeholder="Enter start date"
              value={startDate}
              onChange={startDateValueInputChange}
              onBlur={startDateInputBlurHandle}
            ></input>
          </div>
          <div className={styles.formGroup}>
            <label>End Date:</label>
            <input
              type="datetime-local"
              placeholder="Enter end date"
              value={endDate}
              onChange={endDateValueInputChange}
              onBlur={endDateInputBlurHandle}
            ></input>
          </div>
          <div className={styles.formGroup}>
            <label>Location:</label>
            <input
              type="text"
              placeholder="Enter Location"
              value={location}
              onChange={locationValueInputChange}
              onBlur={locationInputBlurHandle}
            ></input>
          </div>
        </div>

        <Link
          to={`/${!formIsValid ? "create" : "event"}`}
          className={styles.link}
          onClick={handleFormSubmit}
        >
          <button className={styles.nextBtn}>Next</button>
        </Link>
      </form>
    </div>
  );
};

export default Create;
