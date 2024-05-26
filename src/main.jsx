import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer.jsx';
import PdfViewer from './pages/PdfViewer.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="sop" element={<PdfViewer file="sop.pdf" title="Standard Operational Procedure"/>} />
        <Route path="tatib" element={<PdfViewer file="tatib.pdf" title="Tata Tertib"/>} />
      </Routes>
    <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
