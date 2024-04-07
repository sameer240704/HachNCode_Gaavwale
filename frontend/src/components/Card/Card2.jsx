import React, { useState } from "react";
import Piano from "../../assets/piano.png";
import { useMotionValue, useTransform, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useSidebarState } from "../../hooks/useSidebarState";

const Card2 = () => {
  const navigate = useNavigate();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);
  const { expanded } = useSidebarState();

  const handleGuitar = (event) => {
    event.preventDefault();
    navigate("/music/keyboard");
  };

  return (
    <>
      <div>
        <motion.div
          className="min-h-[360px] bg-gray-800 px-5 py-7 rounded-2xl relative"
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
            <h1>Piano</h1>
          </div>
          <div className="about text-lg my-7 text-white">
            <p>
              The Piano Practice Tool Web Component offers pianists a virtual
              space to refine their skills. It boasts a chord library, scale
              generator, metronome, practice tracks, recording, playback, and
              educational materials for holistic skill enhancement.
            </p>
          </div>
          <div className="register">
            <button
              className="px-2 py-3 text-l bg-white text-black rounded-xl active:scale-90 hover:bg-slate-700"
              onClick={handleGuitar}
            >
              Start Tuning
            </button>
          </div>
          <motion.div
            className="absolute"
            style={{
              top: expanded ? "190px" : "150px",
              right: expanded ? "-160px" : "-170px",
            }}
            animate={{ x, y, rotateX, rotateY, z: 1000000 }}
          >
            <img
              src={Piano}
              alt="Guitar image"
              className="h-[300px] -rotate-[10deg]"
              draggable="false"
            />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Card2;
