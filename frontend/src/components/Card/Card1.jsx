import React, { useState } from "react";
import Guitar from "../../assets/guitar.png";
import { useMotionValue, useTransform, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useSidebarState } from "../../hooks/useSidebarState";

const Card1 = () => {
  const navigate = useNavigate();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);
  const { expanded } = useSidebarState();

  const handleGuitar = (event) => {
    event.preventDefault();
    navigate("/music/guitar");
  };

  return (
    <>
      <div>
        <motion.div
          className="min-h-[360px] bg-gray-800 px-5 py-7 rounded-2xl relative "
          style={{
            x,
            y,
            rotateX,
            rotateY,
            zIndex: 1,
            perspective: "1000px",
            cursor: "grab",
            width: expanded ? "400px" : "500px",
          }}
          drag
          dragElastic={0.18}
          dragConstraints={{ top: 0, left: 0, bottom: 0, right: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ cursor: "grabbing" }}
        >
          <div className="title text-3xl text-white font-bold">
            <h1>Guitar</h1>
          </div>
          <div className="about text-l my-7 text-white">
            <p>
              The Guitar Practice Tool Web Component provides a virtual platform
              for guitarists to hone their skills. It includes features like a
              chord library, scale generator, metronome, practice tracks,
              recording, playback, and educational resources for comprehensive
              skill development.
            </p>
          </div>
          <div className="register">
            <button
              className="px-2 py-3 text-l rounded-xl bg-white text-black active:scale-90 hover:bg-slate-700"
              onClick={handleGuitar}
            >
              Start Tuning
            </button>
          </div>
          <motion.div
            className="absolute top-[130px] -right-[170px]"
            animate={{ x, y, rotateX, rotateY, z: 1000000 }}
            style={{
              top: expanded ? "150px" : "130px",
              right: expanded ? "-210px" : "-170px",
            }}
          >
            <img
              src={Guitar}
              alt="Guitar image"
              className="h-[340px] -rotate-[10deg]"
              draggable="false"
            />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Card1;
