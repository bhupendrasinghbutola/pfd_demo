// src/components/Sidebar.js
import React from "react";

const Sidebar = ({ setFeature }) => {
  return (
    <div className="sidebar">
      <h2>Features</h2>
      <button onClick={() => setFeature("annotations")}>Annotations</button>
      <button onClick={() => setFeature("forms")}>Forms</button>
      { <button onClick={() => setFeature("signatures")}>Electronic Signatures</button> }
    </div>
  );
};

export default Sidebar;