import React, { useEffect } from "react";

// Our Throttle Function 🏎️💨
function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

const ThrottleScrollExample = () => {
  useEffect(() => {
    const handleScroll = throttle(() => {
      console.log("Scroll Position Y:", window.scrollY);
    }, 1000); // fires every 1000ms (1 sec)

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener bro — React style
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ height: "300vh", padding: "50px" }}>
      <h1>🔥 Scroll down slowly, check your console!</h1>
      <p>Throttled scroll logging every 1 second ⚙️💨</p>
    </div>
  );
};

export default ThrottleScrollExample;
