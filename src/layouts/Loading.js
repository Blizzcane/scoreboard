import React, { useEffect, useRef, useState } from "react";
import { Application } from "@splinetool/runtime";
import "./Loading.css";

const Loading = () => {
  const canvasRef = useRef(null);
  const [dots, setDots] = useState("");

  useEffect(() => {
    const canvas = canvasRef.current;
    const app = new Application(canvas);
    app.load("https://prod.spline.design/AU91FKhexZsGBzae/scene.splinecode");
  }, []);

  useEffect(() => {
    let intervalId = setInterval(() => {
      setDots((dots) => {
        if (dots === "...") {
          return "";
        } else {
          return dots + ".";
        }
      });
    }, 500);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container">
      <div className="text-overlay">Dribbling{dots}</div>
      <canvas ref={canvasRef} className="canvas3d"></canvas>
    </div>
  );
};

export default Loading;
