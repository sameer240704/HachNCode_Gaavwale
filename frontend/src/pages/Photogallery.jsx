/* eslint-disable react/no-unknown-property */
import React, { Suspense } from "react";
import { useSidebarState } from "../hooks/useSidebarState";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Scene from "../../public/Scene";

const Photogallery = () => {
  const { expanded } = useSidebarState();
  return (
    <div>
      <div
        className="absolute top-0"
        style={{
          left: expanded ? "20vw" : "4vw",
          width: expanded ? "80vw" : "96vw",
        }}
      >
        <div id="home" className="h-screen flex items-center justify-center">
          <Canvas className="h-screen">
            <ambientLight intensity={1} />
            <OrbitControls enableZoom={false} autoRotate={true} />
            <Suspense fallback={null}>
              <Scene scale={[120.5, 120.5, 120.5]} position={[150, 150, 150]} />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default Photogallery;
