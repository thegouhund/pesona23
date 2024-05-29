import React from "react";
import Navbar from "../components/Navbar";
import { Download } from "react-bootstrap-icons";
import pdfImg from "../assets/pdfPreview.png";
import { useWindowDimensions } from "../Utils.jsx";

const PdfViewer = ({ file, title }) => {
  const { width } = useWindowDimensions();

  return (
    <>
      <Navbar isSop={true} />
      <main className="flex flex-col justify-center items-center mt-32">
        <h1 className="text-xl font-extrabold tracking-tight leading-none md:text-2xl lg:text-5xl text-center mb-8">
          {title}
        </h1>
        {width < 768 ? (
          <>
            <div
              className="h-[500px] w-[400px] box-border mb-8 overflow-hidden rounded-lg shadow-lg"
              style={{
                backgroundImage: `url(${pdfImg})`,
                backgroundSize: "cover",
                filter: "brightness(0.5)",
              }}
            ></div>
            <a
              href={file}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-[420px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center gap-2"
            >
              <Download /> Download
            </a>
          </>
        ) : (
          <iframe
            className="w-screen px-8 md:px-16 md:h-[1500px] md:block h-[750px]"
            src={file}
          ></iframe>
        )}
      </main>
    </>
  );
};

export default PdfViewer;
