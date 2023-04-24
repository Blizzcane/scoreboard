import React from "react";
import "./Loading.css"


const Loading = () => {
    return (
        <div class="container">
            <spline-viewer url="https://prod.spline.design/eHUK6JmPy79D67Rc/scene.splinecode" class="spline-viewer"></spline-viewer>
            <div class="text-overlay">Dribbling...</div>
        </div>
    );
};

export default Loading;
