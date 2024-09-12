//

import React, { useEffect } from "react";
import useWindowSize from "../Hooks/useWindowSize";

const colors = ["#0B0909", "#44444C", "#8C8C8C", "#D6D6D6", "#2B89B2"];
const numStars = 120;

const BackgroundAnimation = () => {
  const { height, width } = useWindowSize();

  useEffect(() => {
    const bodyAnimation = document.querySelector(".bodyAnimation");
    const stars = [];

    for (let i = 0; i < numStars; i++) {
      let star = document.createElement("div");
      star.classList.add("star");
      star.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      star.style.left = `${Math.random() * 100}vw`;
      star.style.top = `${Math.random() * 100}vh`;
      stars.push(star);
      bodyAnimation.appendChild(star);
    }

    stars.forEach((el) => {
      el.animate(
        [
          { opacity: 0 },
          { opacity: Math.random() * 0.8 + 0.2 },
          { opacity: 0 },
        ],
        {
          duration: (Math.random() + 0.5) * 3000,
          iterations: Infinity,
          easing: "ease-in-out",
        }
      );
    });
  }, [width, height]);

  return <div className="bodyAnimation"></div>;
};

export default BackgroundAnimation;
