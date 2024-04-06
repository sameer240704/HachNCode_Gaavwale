import React from "react";
import Banner from "../components/Banner.jsx";
import Navigation from "../components/Navigation";
import Courses from "../components/HeroScrollDemo.jsx";
import Contact from "../components/Contact.jsx";

const Homepage = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <Courses />
      <Contact />
    </div>
  );
};

export default Homepage;
