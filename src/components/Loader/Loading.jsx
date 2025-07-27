// src/components/Loading.jsx
import React from "react";
import "./Loading.css"; // We'll define the CSS animation here

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      <p className="loading-text">Loading...</p>
    </div>
  );
};

export default Loading;
