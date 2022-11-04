import React from "react";
import { useGLTF } from "@react-three/drei";

const Hero = () => {
  const { scene } = useGLTF(
    "https://d1a370nemizbjq.cloudfront.net/2c761087-41ea-4774-9f9b-b696dd7c4e01.glb"
  );
  scene.position.y = -1;
  // console.log(scene.position.y);
  return <primitive object={scene}></primitive>;
};

export default Hero;
