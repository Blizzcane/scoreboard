import React, { useEffect, useRef } from "react";
import { Application } from '@splinetool/runtime';
import "./Loading.css";

// displays a spline3D model of a basketball
const Loading = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const app = new Application(canvas);
    app.load('https://prod.spline.design/eHUK6JmPy79D67Rc/scene.splinecode');
  }, []);

  return (
    <div className="container">
      <div className="text-overlay">Dribbling...</div>
      <canvas ref={canvasRef} className="canvas3d"></canvas>
    </div>
  );
};

export default Loading;
