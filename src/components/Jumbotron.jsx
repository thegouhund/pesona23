import { useState, useEffect } from "react";
import jumbotron1 from "../assets/jumbotron1.jpeg";
import jumbotron2 from "../assets/jumbotron2.jpeg";

const Jumbotron = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const images = [
  //   "https://images2.imgbox.com/1c/f8/uXnE7S5T_o.jpeg",
  //   "https://images2.imgbox.com/fd/e4/NLeNFFUZ_o.jpeg",
  // ];

  // const images = [
  //   "https://images2.imgbox.com/a0/74/L6YvdIYs_o.jpeg",
  //   "https://images2.imgbox.com/82/76/8BoBtm0u_o.jpeg",
  // ];

  const images = [jumbotron1, jumbotron2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change the interval duration here (in milliseconds)

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, images.length]);

  return (
    <div className="relative">
      <div className="absolute inset-0 z-10 flex items-center justify-center text-center">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            PESONA 23
          </h1>
          <p className="mt-4 font-semibold text-lg text-white lg:text-2xl">
            Pengabdian Mahasiswa Untuk Edukasi, Sosialisasi dan Aksi Nyata.
          </p>
          <p className="mt-2 text-md font-normal text-white lg:text-xl">
            31 Mei - 1 Juni 2024
          </p>
        </div>
      </div>
      <div className="h-screen overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 brightness-50 object-cover ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Jumbotron;
