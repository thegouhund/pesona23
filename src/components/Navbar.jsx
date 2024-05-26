import logoPesona from "../assets/logoPesona.png";
import { useState, useEffect } from "react";

const Navbar = (isSOP) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleScroll = () => {
    const currentPosition = window.pageYOffset;
    setScrollPosition(currentPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const blurClass = "backdrop-blur-sm bg-gray-400 bg-opacity-40";
console.log("issop " + isSOP);
  return (
    <nav
      className={`border-gray-500 fixed top-0 left-0 w-full z-50 ${
        isSOP
          ? blurClass
          : scrollPosition > 0
          ? blurClass
          : ""
      } duration-500`}
    >
      <div className="flex flex-wrap items-center justify-between mx-8 p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logoPesona} className="w-16 " alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            PESONA 23
          </span>
        </div>
        <button
          onClick={toggleMobileMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg min-[850px]:hidden bg-gray-200/30 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-dark dark:hover:bg-gray-700"
          aria-controls="navbar-solid-bg"
          aria-expanded={isMobileMenuOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } w-full min-[850px]:block min-[850px]:w-auto`}
          id="navbar-solid-bg"
        >
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-500 hover:text-blue-400 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <a
                href="/#latarBelakang"
                className="block py-2 px-3 md:p-0 cursor-pointer rounded md:hover:bg-transparent md:border-0 hover:text-blue-400 text-white duration-300"
              >
                Latar Belakang
              </a>
            </li>
            <li>
              <a
                href="/#tujuan"
                className="block py-2 px-3 md:p-0 cursor-pointer rounded md:hover:bg-transparent md:border-0 hover:text-blue-400 text-white duration-300"
              >
                Tujuan
              </a>
            </li>
            <li>
              <a
                href="/#timeline"
                className="block py-2 px-3 md:p-0 cursor-pointer rounded md:hover:bg-transparent md:border-0 hover:text-blue-400 text-white duration-300"
              >
                Timeline
              </a>
            </li>
            <li>
              <a
                href="/#kunjungan"
                className="block py-2 px-3 md:p-0 cursor-pointer rounded md:hover:bg-transparent md:border-0 hover:text-blue-400 text-white duration-300"
              >
                Kunjungan
              </a>
            </li>
            <li>
              <a
                href="/sop"
                className="block py-2 px-3 md:p-0 cursor-pointer rounded md:hover:bg-transparent md:border-0 hover:text-blue-400 text-white duration-300"
              >
                SOP
              </a>
            </li>
            <li>
              <a
                href="/tatib"
                className="block py-2 px-3 md:p-0 cursor-pointer rounded md:hover:bg-transparent md:border-0 hover:text-blue-400 text-white duration-300"
              >
                Tata Tertib
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
