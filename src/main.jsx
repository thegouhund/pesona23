import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import PdfViewer from "./pages/PdfViewer.jsx";
import tatibPdf from "/tatib.pdf";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="tatib"
          element={<PdfViewer file={tatibPdf} title="SOP & Tata Tertib" />}
        />
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
);
