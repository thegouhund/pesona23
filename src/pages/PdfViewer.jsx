import React from "react";
import Navbar from "../components/Navbar";

const PdfViewer = ({file, title}) => {
  return (
    <>
      <Navbar isSop={true} />
      <main className="flex flex-col justify-center mt-32 ">
        <center>
          <h1 className="text-3xl font-extrabold tracking-tight leading-none md:text-3xl lg:text-5xl text-center">
            {title}
          </h1>
          <iframe
            className="w-screen mx-auto p-16"
            src={file}
            height={1500}
          ></iframe>
        </center>
      </main>
    </>
  );
};

export default PdfViewer;



