import React from "react";
import "./Loading.css"

// displays a spline3D model of a basketball
const Loading = () => {
    return (
        <div className="container">
            <div className="text-overlay">Dribbling...</div>
            <spline-viewer url="https://prod.spline.design/eHUK6JmPy79D67Rc/scene.splinecode" className="spline-viewer"></spline-viewer>
        </div>
    );
};

export default Loading;
