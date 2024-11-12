import React, { useState } from "react";
import profileIcon from "./assets/razvan-zamfir-favicon-color.png";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ): void => {
    event.preventDefault(); // Prevent the default anchor behavior
    window.scrollTo({ top: 0, behavior: "smooth" });
    toggleMenu();
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-800 sticky top-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="#about"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={profileIcon} className="h-10" alt="Site Logo" />
          <span className="text-white text-2xl font-semibold">RZ</span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <a
            href="\Razvan-Andrei Zamfir - CV 2024 .pdf"
            download="\Razvan-Andrei Zamfir - CV 2024.pdf"
          >
            <button
              type="button"
              className="cv-button border font-medium rounded-lg text-sm px-5 py-2 me-2 bg-indigo-700 text-white border-gray-600 hover:bg-indigo-900 hover:border-indigo-300"
            >
              Download CV
            </button>
          </a>

          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
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
        </div>
        <div
          className={`items-center justify-between ${
            isMenuOpen ? "flex" : "hidden"
          } w-full h-1/2 md:flex md:w-auto md:order-1`}
          id="navbar-cta"
        >
          <ul className="flex flex-col justify-center items-center w-full h-full font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-700">
            <li>
              <a
                href="#about"
                className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-indigo-500 focus"
                onClick={(event) => scrollToTop(event)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-indigo-500"
                onClick={toggleMenu}
              >
                Expertise
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-indigo-500"
                onClick={toggleMenu}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-indigo-500"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
