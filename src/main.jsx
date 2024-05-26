import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import PdfViewer from "./pages/PdfViewer.jsx";
import sopPdf from "./assets/sop.pdf";
import tatibPdf from "./assets/tatib.pdf";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="sop"
          element={
            <PdfViewer
              file="https://filebin.net/i7dpljfryt1z686v/sop.pdf"
              title="Standard Operational Procedure"
            />
          }
        />
        <Route
          path="tatib"
          element={<PdfViewer file="https://filebin.net/i7dpljfryt1z686v/tatib.pdf" title="Tata Tertib" />}
        />
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
);
