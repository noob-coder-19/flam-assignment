import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Hero from "./Hero";

const Interact = () => {
  return (
    <div style={{ height: "100vh", backgroundColor: "black" }}>
      <Canvas camera={{ position: [0, 5, 30], fov: 4 }}>
        <ambientLight intensity={0.4}></ambientLight>
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={1} />
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Hero />
      </Canvas>
    </div>
  );
};

export default Interact;
