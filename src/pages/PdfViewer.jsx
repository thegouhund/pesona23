import React from "react";
import Navbar from "../components/Navbar";
import { Download } from "react-bootstrap-icons";

const PdfViewer = ({ file, title }) => {
  return (
    <>
      <Navbar isSop={true} />
      <main className="flex flex-col justify-center items-center mt-32">
        <h1 className="text-xl font-extrabold tracking-tight leading-none md:text-2xl lg:text-5xl text-center mb-8">
          {title}
        </h1>
        <iframe
          className="w-screen px-8 md:px-16 md:h-[1500px] h-[750px]"
          src={file}
        ></iframe>
        <a
          href={file}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white font-sans px-4 py-2 rounded my-4 flex items-center gap-2"
        >
          <Download size={22}/>Download PDF
        </a>
      </main>
    </>
  );
};

export default PdfViewer;
