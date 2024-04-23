import React from "react";

const Jumbotron = () => {
  return (
    <section
      id="jumbotron"
      className="bg-cover bg-no-repeat bg-[url('src/assets/jumbo_img.jpeg')] h-screen"
    >
      <div className="mx-auto text-center  py-24">
        <h1 className="mb-4 mt-64 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          PESONA 23
        </h1>
        <p className="mb-2 font-semibold text-lg text-gray-200 lg:text-2xl sm:px-16 lg:px-48">
          Pengabdian Mahasiswa Untuk Edukasi, Sosialisasi dan Aksi Nyata.
        </p>
        <p className="text-md font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          27-28 April 2024
        </p>
      </div>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#FFFFFF"
          fill-opacity="1"
          d="M0,128L48,160C96,192,192,256,288,245.3C384,235,480,149,576,128C672,107,768,149,864,165.3C960,181,1056,171,1152,149.3C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg> */}
    </section>
  );
};

export default Jumbotron;
