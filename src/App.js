// // import logo from './logo.svg';
// // import './App.css';

// function App() {
//   return (
//     <div className="App">hi</div>
//   );
// }

// export default App;
// src/App.js
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import PDFViewer from "./components/PDFViewer";
import AnnotationFeature from "./components/AnnotationFeature";
import FormFeature from "./components/FormFeature";
 import SignatureFeature from "./components/SignatureFeature";
import "./App.css";
const App = () => {
  const [feature, setFeature] = useState("annotations"); // State to keep track of the active feature

  return (
    <div className="app">
      {/* Sidebar to display the feature options */}
      <Sidebar setFeature={setFeature} />
      <div className="viewer">
        {/* Display the PDF Viewer */}
        <PDFViewer file="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" />
        
        {/* Conditional Rendering of Features */}
        {feature === "annotations" && <AnnotationFeature />}
        {feature === "forms" && <FormFeature />}
         {feature === "signatures" && <SignatureFeature />}
      </div>
    </div>
  );
};

export default App;







