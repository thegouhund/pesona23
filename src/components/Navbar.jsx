import navbarIcons from "../assets/navbarIcons.png";
import { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

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

  // Conditionally apply blur className based on scroll position
  const blurClass =
    scrollPosition > 0 ? " backdrop-blur-sm bg-gray-400 bg-opacity-40" : "";

  return (
    <nav className={`border-gray-500 fixed w-full z-50 ${blurClass} `}>
      <div className="flex flex-wrap items-center justify-between mx-8 p-4 ">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={navbarIcons} className="w-64 max-[980px]:hidden" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            PESONA 23
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden bg-gray-200/30 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-white dark:hover:bg-gray-700 "
          aria-controls="navbar-solid-bg"
          aria-expanded="false"
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
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <Link
                to="latarBelakang"
                smooth
                duration={500}
                spy={true}
                offset={-100}
                className="block py-2 px-3 md:p-0 cursor-pointer rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 text-white"
                aria-current="page"
              >
                Latar Belakang
              </Link>
            </li>
            <li>
              <Link
                to="tujuan"
                smooth
                duration={500}
                spy={true}
                offset={-100}
                className="block py-2 px-3 md:p-0 cursor-pointer rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 text-white"
              >
                Tujuan
              </Link>
            </li>
            <li>
              <Link
                to="timeline"
                smooth
                duration={500}
                spy={true}
                offset={-100}
                className="block py-2 px-3 md:p-0 cursor-pointer rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 text-white"
              >
                Timeline
              </Link>
            </li>
            <li>
              <Link
                to="kunjungan"
                smooth
                duration={500}
                spy={true}
                offset={-100}
                className="block py-2 px-3 md:p-0 cursor-pointer rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 text-white"
              >
                Daftar Kunjungan
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
