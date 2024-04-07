import React from "react";
import { useState, useEffect } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";

const Navigaton = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <div className={scrolled ? "nav-container scrolled" : "nav-container"}>
      <a className="nav-logo" href="#">
        Edutainment
      </a>
      <ul className="nav-items">
        <li className="nav-ele">
          <a
            href="#home"
            className={activeLink === "home" ? "active nav-ele" : "nav-ele"}
            onClick={() => onUpdateActiveLink("home")}
          >
            Home
          </a>
        </li>
        <li className="nav-ele">
          <a
            href="#courses"
            className={activeLink === "courses" ? "active nav-ele" : "nav-ele"}
            onClick={() => onUpdateActiveLink("courses")}
          >
            Courses
          </a>
        </li>
        <li className="nav-ele">
          <a
            href="#feedback"
            className={activeLink === "feedback" ? "active nav-ele" : "nav-ele"}
            onClick={() => onUpdateActiveLink("feedback")}
          >
            Feedback
          </a>
        </li>

        <Link to="/signup" className="nav-items-button" type="submit">
          <span>Sign up</span>
        </Link>
        {/* <button className='nav-items-button-log' type="submit"><span>Log In</span></button> */}
      </ul>
    </div>
  );
};

export default Navigaton;
