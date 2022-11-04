import { Box } from "@mui/material";
import React, { Suspense, useEffect, useState } from "react";
import Draggable from "react-draggable";
import { Canvas } from "@react-three/fiber";
import Hero from "./Hero";
import PositionContext from "../context/PositionContext";
import { useNavigate } from "react-router-dom";

const InnerBox = () => {
  const { position } = React.useContext(PositionContext);
  const [alignment, setAlignment] = useState({ top: "0", left: "0" });

  useEffect(() => {
    // console.log(typeof position);

    if (position === "1") {
      setAlignment({
        top: "0",
        left: "0",
      });
    }

    if (position === "2") {
      setAlignment({
        top: "0",
        right: "0",
      });
    }

    if (position === "3") {
      setAlignment({
        bottom: "0",
        right: "0",
      });
    }

    if (position === "4") {
      setAlignment({}); // default of center of flexbox will be used
    }
  }, [position]);

  const navigate = useNavigate();

  const handleDbClick = (e) => {
    // console.log("double click");
    return navigate("/interact");
  };

  return (
    <Draggable bounds="parent">
      <Box
        sx={{
          width: "15vw",
          height: "50vh",
          backgroundColor: "#000",
          position: "absolute",
          ...alignment,
        }}
        onDoubleClick={handleDbClick}
      >
        <Canvas camera={{ position: [0, 5, 30], fov: 5 }}>
          <Suspense fallback={null}>
            <pointLight position={[10, 10, 10]} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={1} />
            <ambientLight intensity={0.4}></ambientLight>
            <Hero />
          </Suspense>
        </Canvas>
      </Box>
    </Draggable>
  );
};

export default InnerBox;
