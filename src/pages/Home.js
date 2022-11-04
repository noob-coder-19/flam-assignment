import React from "react";
import Navbar from "../components/Navbar";
import OuterBox from "../components/OuterBox";
import Padding from "../components/Padding";
import Footer from "../components/Footer";
import { PositionProvider } from "../context/PositionContext";

const Home = () => {
  return (
    <>
      <PositionProvider>
        <Navbar></Navbar>
        <Padding></Padding>
        <OuterBox></OuterBox>
        <Footer></Footer>
      </PositionProvider>
    </>
  );
};

export default Home;
