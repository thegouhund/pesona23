import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import PdfViewer from "./pages/PdfViewer.jsx";
import sopPdf from "/sop.pdf";
import tatibPdf from "/tatib.pdf";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="sop"
          element={
            <PdfViewer file="https://drive.google.com/file/d/153_4QTXOY_qfGKHgG_r-4qAN_1e65Kb6/preview" title="Standard Operational Procedure" />
          }
        />
        <Route
          path="tatib"
          element={<PdfViewer file="https://drive.google.com/file/d/1tZ_rAD6HkI7_2ggDjv3GQABYAWvFdEAO/preview" title="Tata Tertib" />}
        />
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
);
