import React, { useState } from "react";
import Drums from "../../assets/drums.png";
import { useMotionValue, useTransform, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useSidebarState } from "../../hooks/useSidebarState";

const Card3 = () => {
  const navigate = useNavigate();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);
  const { expanded } = useSidebarState();

  const handleGuitar = (event) => {
    event.preventDefault();
    navigate("/music/drums");
  };

  return (
    <>
      <div>
        <motion.div
          className="min-h-[360px] bg-gray-800 px-5 py-7 rounded-2xl relative mb-10"
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
            <h1>Drums</h1>
          </div>
          <div className="about text-lg my-7 text-white">
            <p>
              The Drums Practice Tool Web Component provides drummers a virtual
              platform to hone their skills. Featuring a comprehensive set of
              tools including a metronome, practice tracks, playback, and
              educational resources for holistic skill development.
            </p>
          </div>
          <div className="register">
            <button
              className="px-2 py-3 text-l text-black bg-white rounded-xl active:scale-90 hover:bg-slate-700"
              onClick={handleGuitar}
            >
              Start Tuning
            </button>
          </div>
          <motion.div
            className="absolute"
            style={{
              top: expanded ? "250px" : "250px",
              right: expanded ? "-150px" : "-150px",
            }}
            animate={{ x, y, rotateX, rotateY, z: 1000000 }}
          >
            <img
              src={Drums}
              alt="Guitar image"
              className="h-[200px]"
              draggable="false"
            />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Card3;
