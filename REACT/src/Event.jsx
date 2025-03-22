import { useState, useEffect } from "react";

const Event = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener("resize", handleResize);
    
    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <h1>Window Size</h1>
      <p>Width: {windowSize.width}px</p>
      <p>Height: {windowSize.height}px</p>
    </div>
  );
};

export default Event;
