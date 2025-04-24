import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import gsap from "gsap";
import "./HamburgerMenu.css";

const Layout = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active) {
      
      gsap.from(".links li", {
        opacity: 0,
        y: -20,
        duration: 0.5,
        stagger: 0.1,
        ease: "power4.out",
      });
    }
  }, [active]);

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <div>
      <div className="nav">
        <svg
          className={`ham hamRotate ham8 ${active ? "active" : ""}`}
          viewBox="0 0 100 100"
          width="80"
          height="80"
          onClick={toggleActive}
        >
          <path
            className="line top"
            d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
          />
          <path className="line middle" d="m 30,50 h 40" />
          <path
            className="line bottom"
            d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
          />
        </svg>
      </div>

      {active && (
        <div className="box">
          <div className="links">
            <ol>
              <li><Link to="/" onClick={() => setActive(false)}>Home</Link></li>
              <li><Link to="/about-me" onClick={() => setActive(false)}>About Me</Link></li>
              <li><Link to="/projects" onClick={() => setActive(false)}>Projects</Link></li>
              <li><Link to="/contact" onClick={() => setActive(false)}>Contact</Link></li>
            </ol>
          </div>
        </div>
      )}

      <Outlet />
    </div>
  );
};

export default Layout;
