// src/components/AnnotationFeature.js
import React, { useState } from "react";

const AnnotationFeature = () => {
  const [annotations, setAnnotations] = useState([]);

  const addAnnotation = (e) => {
    const text = prompt("Enter annotation text:");
    if (text) {
      const newAnnotation = { text, x: e.clientX, y: e.clientY };
      setAnnotations([...annotations, newAnnotation]);
    }
  };

  return (
    <div className="annotation-feature" onClick={addAnnotation}>
      {annotations.map((annotation, index) => (
        <div
          key={index}
          className="annotation"
          style={{ position: "absolute", top: annotation.y, left: annotation.x }}
        >
          {annotation.text}
        </div>
      ))}
    </div>
  );
};

export default AnnotationFeature;