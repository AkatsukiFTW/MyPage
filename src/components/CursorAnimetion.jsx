import React, { useEffect } from "react";

const CursorAnimation = () => {
  useEffect(() => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    document.body.appendChild(dot);

    let mouseX = 0;
    let mouseY = 0;
    let dotX = 0;
    let dotY = 0;
    const delay = 0.2;

    const dotSize = 20; 

    document.addEventListener("mousemove", (e) => {
      mouseX = e.pageX - dotSize / 2;
      mouseY = e.pageY - dotSize / 2;
    });

    const hoverTargets = document.querySelectorAll(".title ,.email ,.git");
    hoverTargets.forEach((target) => {
      target.addEventListener("mouseenter", () => {
        dot.style.transform = "scale(2.5)";
        dot.style.backgroundColor = "white";
      });
      target.addEventListener("mouseleave", () => {
        dot.style.transform = "scale(1)";
        dot.style.backgroundColor = "inherit";
      });
    });

    function animateDot() {
      dotX += (mouseX - dotX) * delay;
      dotY += (mouseY - dotY) * delay;
      const maxX = window.innerWidth - dotSize - 10; 
      const maxY = window.innerHeight - dotSize-10;

      dotX = Math.min(Math.max(dotX, 0), maxX);
      dotY = Math.min(Math.max(dotY, 0), maxY);

      dot.style.left = `${dotX}px`;
      dot.style.top = `${dotY}px`;

      requestAnimationFrame(animateDot);
    }

    animateDot();

    return () => {
      dot.remove();
    };
  }, []);

  return null;
};

export default CursorAnimation;
