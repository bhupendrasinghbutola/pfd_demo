// src/components/PDFViewer.js
import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const PDFViewer = ({ file }) => {
  return (
    <div className="pdf-viewer">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
        {/* <Viewer fileUrl={file} /> */}
        <Viewer fileUrl={file} />

      </Worker>
    </div>
  );
};

export default PDFViewer;