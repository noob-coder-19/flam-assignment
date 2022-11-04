import { Container } from "@mui/material";
import React from "react";
import InnerBox from "./InnerBox";

const OuterBox = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        backgroundColor: "rgb(220,220,220)",
        height: "80vh",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      disableGutters
    >
      <InnerBox></InnerBox>
    </Container>
  );
};

export default OuterBox;
