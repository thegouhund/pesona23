import { useState, useEffect } from "react";

const Jumbotron = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://images2.imgbox.com/1c/f8/uXnE7S5T_o.jpeg",
    "https://images2.imgbox.com/fd/e4/NLeNFFUZ_o.jpeg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [currentIndex]);

  return (
    <div
      id="jumbotron"
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
        transitionDuration: "2s",
      }}
      className="bg-cover bg-no-repeat h-screen duration-500 drop-shadow-2xl"
    >
      <div className="mx-auto text-center py-24 ">
        <h1 className="[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] mb-4 mt-64 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          PESONA 23
        </h1>
        <p className="[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] mb-2 font-semibold text-lg text-white lg:text-2xl sm:px-16 lg:px-48">
          Pengabdian Mahasiswa Untuk Edukasi, Sosialisasi dan Aksi Nyata.
        </p>
        <p className="[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] text-md font-normal text-white lg:text-xl sm:px-16 lg:px-48">
          27-28 April 2024
        </p>
      </div>
    </div>
  );
};

export default Jumbotron;
