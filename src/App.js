import Spline from "@splinetool/react-spline";
import React from "react";
import About from "./components/About";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="h-screen bg-[#1f1f1f]  relative font-poppins">
      {/* <Spline
        className="lg:absolute lg:scale-100 opacity-50 top-0 left-0 brightness-[40%] scale-50"
        scene="https://prod.spline.design/in8RfRXlEHA7oIRm/scene.splinecode"
      /> */}
      <Spline
        className="absolute lg:-left-[41vw] lg:-top-[38vh] scale-75 left-0 -top-[40vh] lg:scale-100"
        scene="https://prod.spline.design/jRfj5MPqtXVSKZm0/scene.splinecode"
      />

      <div className="h-screen pt-[22vh] ">
        <About />
      </div>
    </div>
  );
}

export default App;
