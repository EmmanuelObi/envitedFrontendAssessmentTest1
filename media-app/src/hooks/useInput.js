import { useEffect, useState } from "react";

const useInput = (validate, initialValue) => {
  const [value, setValue] = useState(initialValue);
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validate && validate(value);
  const hasError = !valueIsValid && isTouched;

  useEffect(() => {
    setValue(() => initialValue);
  }, [initialValue]);

  const valueInputChange = (event) => {
    setValue(`${event?.target?.value ?? event}`);
  };

  const setInputValue = (value) => {
    setValue(value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const clearInputValue = () => setValue("");

  return {
    value,
    hasError,
    valueInputChange,
    valueIsValid,
    inputBlurHandler,
    clearInputValue,
    setInputValue,
  };
};
export default useInput;
