import React, { useState } from "react";
import profilePic from "./assets/profile.jpg";
import skillIco1 from "./assets/pencil.png";
import skillIco2 from "./assets/management.png";
import skillIco3 from "./assets/code-optimisation.png";
import projectIco1 from "./assets/r4h.png";
import projectIco2 from "./assets/sietar.png";
import projectIco3 from "./assets/weather.png";
import projectIco4 from "./assets/dragon.png";
import projectIco5 from "./assets/registration.png";
import projectIco6 from "./assets/balance-sheet.png";
import projectIco7 from "./assets/tschom.png";
import projectIco8 from "./assets/nutrition-label.png";

const MainSection: React.FC = () => {
  const [showAll, setShowAll] = useState<boolean>(false);

  const toggleShowAll = (): void => {
    setShowAll(!showAll);
  };

  return (
    <div>
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-5">
        <div className="lg:flex lg:justify-between lg:gap-4" id="about">
          <header className="lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:pt-24 lg:pb-4">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-4xl">
                <a href="/">Razvan-Andrei Zamfir</a>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                WordPress Manager & Web Developer
              </h2>
              <p className="mt-4 max-w-xs leading-normal text-slate-200">
                I create aesthetically pleasing and accessible webpages adapted
                to clients' needs.
              </p>
              <ul
                className="ml-1 mt-4 flex items-center"
                aria-label="Social media"
              >
                <li className="mr-5 text-xs shrink-0">
                  <a
                    className="social-icons block text-slate-200"
                    href="https://github.com/razvan-andrei-zamfir"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="GitHub (opens in a new tab)"
                    title="GitHub"
                  >
                    <span className="sr-only">GitHub</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-6 w-6"
                      aria-hidden="true"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                  </a>
                </li>
                <li className="mr-5 text-xs shrink-0">
                  <a
                    className="social-icons block text-slate-200"
                    href="https://www.linkedin.com/in/razvan-andrei-zamfir"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="LinkedIn (opens in a new tab)"
                    title="LinkedIn"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6"
                      aria-hidden="true"
                    >
                      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                    </svg>
                  </a>
                </li>
                <li className="mr-5 text-xs shrink-0">
                  <a
                    className="social-icons block text-slate-200"
                    href="https://codepen.io/Razvan-Zamfir"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="CodePen (opens in a new tab)"
                    title="CodePen"
                  >
                    <span className="sr-only">CodePen</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 64 64"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="h-6 w-6"
                      aria-hidden="true"
                    >
                      <path
                        d="M3.06 41.732L32 60.932l28.94-19.2V22.268L32 3.068l-28.94 19.2zm57.878 0L32 22.268 3.06 41.732m0-19.463L32 41.47l28.94-19.2M32 3.068v19.2m0 19.463v19.2"
                        strokeWidth="5"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </header>
          <main className="pt-24 lg:w-1/2 lg:pt-24 lg:pb-4">
            <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  About
                </h2>
              </div>

              <div>
                <p className="mb-4 text-slate-200">
                  I've been a tech enthusiast all my life, with a never-ending
                  passion for IT knowledge. Although my first programming
                  journey began a long time ago, in the past 12 months I decided
                  to immerse myself fully in this domain, which led me on the
                  mission to gain web development skills, among others.
                </p>
                <p className="mb-4 text-slate-200">
                  Presently, with years of experience in utilising a multitude
                  of design and content-management apps and tools, my objective
                  is to become a full-time web developer and create modern and
                  accessible digital experiences that satisfy the needs of any
                  customer.
                </p>
              </div>
            </section>
          </main>
        </div>

        {/*                 SKILLS SECTION                */}

        <div id="skills">
          <section className="text-gray-200 bg-gray-900 border-gray-600 border shadow-2xl">
            <img
              src={profilePic}
              alt="profile image"
              className="max-w-40 -mb-20 mt-12 rounded-full mx-auto"
            />
            <div className="max-w-6xl mx-auto px-5 py-24 ">
              <div className="text-center mb-20">
                <h2 className=" title-font  mb-4 text-2xl font-extrabold leading-10 tracking-tight sm:text-3xl sm:leading-none md:text-4xl">
                  Skills & Expertise
                </h2>
                <div className="flex mt-6 justify-center">
                  <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                </div>
              </div>
              <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col">
                  <div className="pattern-dots-md gray-light">
                    <div className="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6">
                      <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-transparent border border-gray-500 mb-4 flex-shrink-0 p-2">
                        {" "}
                        <img src={skillIco1} />
                      </div>
                      <div className="flex-grow">
                        <h2 className=" text-xl title-font font-medium mb-3">
                          Web Development
                        </h2>
                        <p className="leading-relaxed text-sm text-left">
                          Using libraries & frameworks such as React.js,
                          TailwindCSS, Bootstrap and jQuery, I can create
                          dynamic, modern and responsive websites.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
                  <div className="pattern-dots-md gray-light">
                    <div className="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6 ">
                      <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-transparent border border-gray-500 mb-4 flex-shrink-0 p-2">
                        <img src={skillIco2} alt="" />
                      </div>
                      <div className="flex-grow">
                        <h2 className=" text-xl title-font font-medium mb-3">
                          CMS Management
                        </h2>
                        <p className="leading-relaxed text-sm text-left">
                          Whether designing, hosting, or managing efficient
                          WordPress websites, I can adapt to any scenario and
                          build according to clients' needs.
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
                  <div className="pattern-dots-md gray-light">
                    <div className="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6 ">
                      <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-transparent border border-gray-500 mb-4 flex-shrink-0 p-2">
                        <img src={skillIco3} />
                      </div>
                      <div className="flex-grow">
                        <h2 className=" text-xl title-font font-medium mb-3">
                          SEO Optimisations
                        </h2>
                        <p className="leading-relaxed text-sm text-left">
                          Having experience in digital marketing, I can use
                          various SEO optimisations to ensure superior online
                          visibility and search ranking.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/*                 PROJECTS SECTION                */}

        <section id="projects">
          <div className="mb-10 text-center mt-20">
            <h2 className="text-gray-200 mb-4 text-2xl font-extrabold leading-10 tracking-tight sm:text-3xl sm:leading-none md:text-4xl">
              My Projects
            </h2>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
          </div>

          {/*PROJECT CARDS*/}

          <div className="text-center">
            <div className="inline-block max-w-sm border rounded-lg shadow dark:bg-gray-800 border-gray-700 m-5">
              <a
                href="https://codepen.io/Razvan-Zamfir/pen/VwoYxrZ"
                target="_blank"
              >
                <img className="rounded-t-lg" src={projectIco5} alt="" />
              </a>
              <div className="p-5">
                <a
                  href="https://codepen.io/Razvan-Zamfir/pen/VwoYxrZ"
                  target="_blank"
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Registration platform with DB
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Fully functional registration/sign-in platform
                </p>
                <div>
                  <button
                    type="button"
                    className="border font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 bg-gray-950/50 text-white border-gray-700 hover:bg-gray-700/50 hover:border-gray-400"
                  >
                    PHP
                  </button>
                  <button
                    type="button"
                    className="border font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 bg-gray-950/50 text-white border-gray-700 hover:bg-gray-700/50 hover:border-gray-400"
                  >
                    PDO
                  </button>
                  <button
                    type="button"
                    className="border font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 bg-gray-950/50 text-white border-gray-700 hover:bg-gray-700/50 hover:border-gray-400"
                  >
                    MySQL
                  </button>
                  <button
                    type="button"
                    className="border font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 bg-gray-950/50 text-white border-gray-700 hover:bg-gray-700/50 hover:border-gray-400"
                  >
                    Bootstrap
                  </button>
                  <button
                    type="button"
                    className="border font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 bg-gray-950/50 text-white border-gray-700 hover:bg-gray-700/50 hover:border-gray-400"
                  >
                    CSS
                  </button>
                  <button
                    type="button"
                    className="border font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 bg-gray-950/50 text-white border-gray-700 hover:bg-gray-700/50 hover:border-gray-400"
                  >
                    HTML
                  </button>
                </div>
              </div>
            </div>
            <div className="inline-block max-w-sm border rounded-lg shadow bg-gray-800 border-gray-700 m-5">
              <a href="https://ferienidee.at/">
                <img
                  className="rounded-t-lg"
                  src={projectIco7}
                  alt="project icon"
                />
              </a>
              <div className="p-5">
                <a href="https://ferienidee.at/" target="_blank">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Commercial Website
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Dynamic travel accommodation website
                </p>
                <div>
                  <button
                    type="button"
                    className="border font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 bg-gray-950/50 text-white border-gray-700 hover:bg-gray-700/50 hover:border-gray-400"
                  >
                    WordPress
                  </button>
                  <button
                    type="button"
                    className="border font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 bg-gray-950/50 text-white border-gray-700 hover:bg-gray-700/50 hover:border-gray-400"
                  >
                    HTML
                  </button>
                  <button
                    type="button"
                    className="border font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 bg-gray-950/50 text-white border-gray-700 hover:bg-gray-700/50 hover:border-gray-400"
                  >
                    CSS
                  </button>
                  <button
                    type="button"
                    className="border font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 bg-gray-950/50 text-white border-gray-700 hover:bg-gray-700/50 hover:border-gray-400"
                  >
                    LESS
                  </button>
                  <button
                    type="button"
                    className="border font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 bg-gray-950/50 text-white border-gray-700 hover:bg-gray-700/50 hover:border-gray-400"
                  >
                    PHP
                  </button>
                </div>
              </div>
            </div>
            <div className="inline-block max-w-sm border rounded-lg shadow bg-gray-800 border-gray-700 m-5">
              <a href="https://rooms4holiday.com/">
                <img
                  className="rounded-t-lg"
                  src={projectIco1}
                  alt="project icon"
                />
              </a>
              <div className="p-5">
                <a href="https://rooms4holiday.com/" target="_blank">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Commercial Website
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Travel accommodation business website
                </p>
                <div>
                  <button
                    type="button"
                    className="border font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 bg-gray-950/50 text-white border-gray-700 hover:bg-gray-700/50 hover:border-gray-400"
                  >
                    WordPress
                  </button>
                  <button
                    type="button"
                    className="border font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 bg-gray-950/50 text-white border-gray-700 hover:bg-gray-700/50 hover:border-gray-400"
                  >
                    HTML
                  </button>
                  <button
                    type="button"
                    className="border font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 bg-gray-950/50 text-white border-gray-700 hover:bg-gray-700/50 hover:border-gray-400"
                  >
                    CSS
                  </button>
                  <button
                    type="button"
                    className="border font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 bg-gray-950/50 text-white border-gray-700 hover:bg-gray-700/50 hover:border-gray-400"
                  >
                    PHP
                  </button>
                </div>
              </div>
            </div>
            <div className="inline-block max-w-sm border rounded-lg shadow dark:bg-gray-800 border-gray-700 m-5">
              <a href="https://sietar.at/">
                <img
                  className="rounded-t-lg"
                  src={projectIco2}
                  alt="project icon"
                />
              </a>
              <div className="p-5">
                <a href="https://sietar.at/" target="_blank">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    NPO Website - SIETAR Austria
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Platform for expats and immigrants in Austria
                </p>
                <div>
                  <button
                    type="button"
                    className="border font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 bg-gray-950/50 text-white border-gray-700 hover:bg-gray-700/50 hover:border-gray-400"
                  >
                    WordPress
                  </button>
                  <button
                    type="button"
                    className="border font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 bg-gray-950/50 text-white border-gray-700 hover:bg-gray-700/50 hover:border-gray-400"
                  >
                    HTML
                  </button>
                  <button
                    type="button"
                    className="border font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 bg-gray-950/50 text-white border-gray-700 hover:bg-gray-700/50 hover:border-gray-400"
                  >
                    CSS
                  </button>
                  <button
                    type="button"
                    className="border font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 bg-gray-950/50 text-white border-gray-700 hover:bg-gray-700/50 hover:border-gray-400"
                  >
                    PHP
                  </button>
                </div>
              </div>
            </div>
            <div className="inline-block max-w-sm border rounded-lg shadow dark:bg-gray-800 border-gray-700 m-5">
              <a
                href="https://codepen.io/Razvan-Zamfir/pen/gOJapme"
                target="_blank"
              >
                <img
                  className="rounded-t-lg"
                  src={projectIco3}
                  alt="project icon"
                />
              </a>
              <div className="p-5">
                <a
                  href="https://codepen.io/Razvan-Zamfir/pen/gOJapme"
                  target="_blank"
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Weather App
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  A simple and modern weather app
                </p>
                <div>
                  <button
                    type="button"
                    className="border font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 bg-gray-950/50 text-white border-gray-700 hover:bg-gray-700/50 hover:border-gray-400"
                  >
                    HTML
                  </button>
                  <button
                    type="button"
                    className="border font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 bg-gray-950/50 text-white border-gray-700 hover:bg-gray-700/50 hover:border-gray-400"
                  >
                    CSS
                  </button>
                  <button
                    type="button"
                    className="border font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 bg-gray-950/50 text-white border-gray-700 hover:bg-gray-700/50 hover:border-gray-400"
                  >
                    TailwindCSS
                  </button>
                  <button
                    type="button"
                    className="border font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 bg-gray-950/50 text-white border-gray-700 hover:bg-gray-700/50 hover:border-gray-400"
                  >
                    JavaScript
                  </button>
                </div>
              </div>
            </div>
            <div className="inline-block max-w-sm border rounded-lg shadow dark:bg-gray-800 border-gray-700 m-5">
              <a
                href="https://codepen.io/Razvan-Zamfir/pen/abMjMer"
                target="_blank"
              >
                <img className="rounded-t-lg" src={projectIco4} alt="" />
              </a>
              <div className="p-5">
                <a
                  href="https://codepen.io/Razvan-Zamfir/pen/abMjMer"
                  target="_blank"
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Mini RPG Game
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  A simple & fun JavaScript game
                </p>
                <div>
                  <button
                    type="button"
                    className="border font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 bg-gray-950/50 text-white border-gray-700 hover:bg-gray-700/50 hover:border-gray-400"
                  >
                    HTML
                  </button>
                  <button
                    type="button"
                    className="border font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 bg-gray-950/50 text-white border-gray-700 hover:bg-gray-700/50 hover:border-gray-400"
                  >
                    CSS
                  </button>
                  <button
                    type="button"
                    className="border font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 bg-gray-950/50 text-white border-gray-700 hover:bg-gray-700/50 hover:border-gray-400"
                  >
                    Bootstrap
                  </button>
                  <button
                    type="button"
                    className="border font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 bg-gray-950/50 text-white border-gray-700 hover:bg-gray-700/50 hover:border-gray-400"
                  >
                    JavaScript
                  </button>
                </div>
              </div>
            </div>
            {showAll && (
              <>
                <div className="inline-block max-w-sm border rounded-lg shadow dark:bg-gray-800 border-gray-700 m-5">
                  <a
                    href="https://codepen.io/Razvan-Zamfir/pen/NWZOKMK"
                    target="_blank"
                  >
                    <img className="rounded-t-lg" src={projectIco6} alt="" />
                  </a>
                  <div className="p-5">
                    <a
                      href="https://codepen.io/Razvan-Zamfir/pen/NWZOKMK"
                      target="_blank"
                    >
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Modern Balance Sheet
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      A simple and clean model of a balance sheet
                    </p>
                    <div className="pl-16">
                      <button
                        type="button"
                        className="border font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 bg-gray-950/50 text-white border-gray-700 hover:bg-gray-700/50 hover:border-gray-400"
                      >
                        CSS
                      </button>
                      <button
                        type="button"
                        className="border font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 bg-gray-950/50 text-white border-gray-700 hover:bg-gray-700/50 hover:border-gray-400"
                      >
                        HTML
                      </button>
                      <button
                        type="button"
                        className="border font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 bg-gray-950/50 text-white border-gray-700 hover:bg-gray-700/50 hover:border-gray-400 invisible"
                      >
                        CSS
                      </button>
                      <button
                        type="button"
                        className="border font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 bg-gray-950/50 text-white border-gray-700 hover:bg-gray-700/50 hover:border-gray-400 invisible"
                      >
                        CSS
                      </button>
                      <button
                        type="button"
                        className="border font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 bg-gray-950/50 text-white border-gray-700 hover:bg-gray-700/50 hover:border-gray-400 invisible"
                      >
                        CSS
                      </button>
                    </div>
                  </div>
                </div>
                <div className="inline-block max-w-sm border rounded-lg shadow dark:bg-gray-800 border-gray-700 m-5">
                  <a
                    href="https://codepen.io/Razvan-Zamfir/pen/YzoJKYj"
                    target="_blank"
                  >
                    <img className="rounded-t-lg" src={projectIco8} alt="" />
                  </a>
                  <div className="p-5">
                    <a
                      href="https://codepen.io/Razvan-Zamfir/pen/YzoJKYj"
                      target="_blank"
                    >
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Nutritional Label
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      A model of the well-known food labels
                    </p>
                    <div className="pl-16">
                      <button
                        type="button"
                        className="border font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 bg-gray-950/50 text-white border-gray-700 hover:bg-gray-700/50 hover:border-gray-400"
                      >
                        CSS
                      </button>
                      <button
                        type="button"
                        className="border font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 bg-gray-950/50 text-white border-gray-700 hover:bg-gray-700/50 hover:border-gray-400"
                      >
                        HTML
                      </button>
                      <button
                        type="button"
                        className="border font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 bg-gray-950/50 text-white border-gray-700 hover:bg-gray-700/50 hover:border-gray-400 invisible"
                      >
                        CSS
                      </button>
                      <button
                        type="button"
                        className="border font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 bg-gray-950/50 text-white border-gray-700 hover:bg-gray-700/50 hover:border-gray-400 invisible"
                      >
                        CSS
                      </button>
                      <button
                        type="button"
                        className="border font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 bg-gray-950/50 text-white border-gray-700 hover:bg-gray-700/50 hover:border-gray-400 invisible"
                      >
                        CSS
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}{" "}
            {/*       END OF HIDDEN PROJECTS        */}
            <div className="flex flex-col items-center">
              <button
                onClick={toggleShowAll}
                type="button"
                className="border rounded-lg text-lg px-16 py-2 my-4 bg-gray-800 text-white border-gray-600 hover:bg-gray-400/50 hover:border-gray-400 font-bold"
              >
                {showAll ? "View Less" : "View More"}
              </button>
            </div>
          </div>
        </section>

        {/*                 CONTACT SECTION                */}

        <section id="contact">
          <div className="w-full pt-20 pb-20 text-center">
            <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white animate-pulse">
              Let's get in touch...
            </h5>
            <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
              How do you take your coffee?
            </p>
            <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
              <a
                href="https://www.linkedin.com/in/razvan-andrei-zamfir"
                target="_blank"
                className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  height="1.5em"
                  width="1.5em"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1"
                >
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                </svg>
                <p className="text-lg">LinkedIn</p>
              </a>
              <a
                href="mailto:razvan.zamfir.986@gmail.com"
                className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1.5em"
                  width="1.5em"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1"
                >
                  <path
                    fill-rule="evenodd"
                    d="M23,20 L23,6 L12,15 L1,6 L1,20 L23,20 Z M12,12 L22,4 L2,4 L12,12 Z"
                  ></path>
                </svg>
                <p className="text-lg">Gmail</p>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainSection;
