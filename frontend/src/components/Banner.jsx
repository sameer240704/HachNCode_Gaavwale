import React from "react";
import Lottie from "lottie-react";
import pattern from "../assets/lotti/pattern.json";
import arrow from "../assets/lotti/arrow.json";
import studyingonline from "../assets/lotti/study.json";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import LoginIcon from "@mui/icons-material/Login";

const Home = () => {
  const [text] = useTypewriter({
    words: ["Skills", "Learnings"],
    loop: 0,
    typeSpeed: 300,
  });

  return (
    <div id="home">
      <Lottie className="yellow-pattern-1" animationData={pattern} />
      <Lottie className="yellow-pattern-2" animationData={pattern} />
      <Lottie className="study" animationData={studyingonline} />
      <Lottie className="arrow" animationData={arrow} />
      <Lottie className="arrow" animationData={arrow} />
      <h1 className="banner-heading">
        Improve your <span>{text}</span> faster!
      </h1>
      <p className="banner-text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa ab ipsam
        illum expedita ducimus at totam hic quis voluptatibus odit.
      </p>
    </div>
  );
};

export default Home;
