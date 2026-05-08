import React, { useState, useEffect } from "react";

import banner1 from "../assets/images/banner1.png";
import banner4 from "../assets/images/banner4.png";
import banner3 from "../assets/images/banner3.png";
import banner2 from "../assets/images/banner2.png";




function HeroSlider() {
  const images = ["/banner1.png", "/banner2.png", "/banner3.png", "/banner4.png"];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slide = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(slide);
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <img
        src={images[current]}
        alt="banner"
        style={{
          width: "100%",
          height: "650px",
          objectFit: "cover",
          transition: "0.5s"
        }}
      />

      {/* Left Button */}
      <button
        onClick={() =>
          setCurrent(current === 0 ? images.length - 1 : current - 1)
        }
        style={leftBtn}
      >
        ❮
      </button>

      {/* Right Button */}
      <button
        onClick={() =>
          setCurrent((current + 1) % images.length)
        }
        style={rightBtn}
      >
        ❯
      </button>
    </div>
  );
}

const leftBtn = {
  position: "absolute",
  top: "50%",
  left: "20px",
  transform: "translateY(-50%)",
  fontSize: "40px",
  background: "transparent",
  color: "white",
  border: "none",
  cursor: "pointer"
};

const rightBtn = {
  position: "absolute",
  top: "50%",
  right: "20px",
  transform: "translateY(-50%)",
  fontSize: "40px",
  background: "transparent",
  color: "white",
  border: "none",
  cursor: "pointer"
};

export default HeroSlider;