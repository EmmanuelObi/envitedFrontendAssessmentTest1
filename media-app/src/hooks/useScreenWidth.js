import { useState, useEffect } from "react";

const useScreenWidth = () => {
  const getScreenWidth = () => window.innerWidth;
  const [width, setWidth] = useState(getScreenWidth());

  useEffect(() => {
    const checkResize = () => {
      setWidth(() => getScreenWidth());
    };

    window.addEventListener("resize", checkResize);
    return () => window.removeEventListener("resize", checkResize);
  }, []);

  return width;
};

export default useScreenWidth;
