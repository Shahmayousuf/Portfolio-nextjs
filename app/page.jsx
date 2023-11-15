"use client";

import Image from "next/image";
import { BsFillMoonStarsFill, BsGithub, BsLinkedin } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import profile from "../public/pic.png";
import developer from "../public/developer.png";
import tools from "../public/tools.png";
import integration from "../public/integration.png";
import certificate from "../public/certificate.png";
import ecom from "../public/ecommerce.png";
import netflix from "../public/netflix.png";
import  shobha from "../public/shobha.png"
import { useState } from "react";
import Link from "next/link";
import { Tooltip as ReactTooltip } from "react-tooltip";

const Home = () => {
  const [darkMode, setDarkmode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className=" bg-white px-8 dark:bg-gray-900">
        <section className="w-full min-h-screen">
          <nav className="py-5 mb-12 flex justify-between">
            <h1 className="text-xl font-semibold font-burtons dark:text-slate-200">
              My Portfolio
            </h1>
            <ul className="flex items-center gap-5 ">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkmode(!darkMode)}
                  className="text-2xl cursor-pointer  dark:text-slate-200"
                />
              </li>

              <Link
                // href="/cv%20shahmayousuf.pdf "
                href="https://drive.google.com/file/d/1-CwdYBdyJXx-wSTEE_jPUbAOO9idlC-l/view?usp=sharing"
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md font-burtons"
              ><li>
                Resume
                </li>
              </Link>
             
            </ul>
          </nav>
          <div className="text-center p-10 flex items-center flex-col  ">
            <h2 className="text-4xl  py-1 text-teal-600 font-medium md:text-5xl ">
              SHAHMA YOUSUF
            </h2>
            <h3 className="text-2xl font-bold py-2 md:text-3xl  dark:text-gray-300">
              React Front-End Developer
            </h3>
            <p className="text- leading-7 text-gray-800 md:text-lg  dark:text-gray-500 md:max-w-3xl ">
              Passionate and motivated front-end developer eager to learn and
              grow in the industry. Excited to take on new challenges and
              develop my skills further, and constantly exploring new
              technologies to stay up-to-date with the latest trends. My
              proficiency in React JS enables me to develop reusable and modular
              components that enhance code reusability and maintainability. I am
              also familiar with Redux, React Router, and other popular
              libraries that complement React JS in building robust web
              applications.
            </p>
          </div>
          <div className="text-3xl flex gap-14 justify-center py-3 text-gray-700  dark:text-gray-300">
            <Link href="mailto:shahmayousuf@gmail.com">
              <GrMail
                data-tip="GMail"
                data-for="GmailTooltip"
                id="mail-title"
              />
            </Link>
            <Link href="https://www.linkedin.com/in/shahmayousuf98">
              <BsLinkedin
                data-tip="LinkedIn"
                data-for="linkedinTooltip"
                id="app-title"
              />
            </Link>
            <Link href="https://github.com/Shahmayousuf">
              <BsGithub
                data-tip="GitHub"
                data-for="GitHubTooltip"
                id="git-title"
              />
            </Link>
          </div>
          <ReactTooltip anchorSelect="#app-title" place="top" effect="solid">
            LinkedIn
          </ReactTooltip>
          <ReactTooltip anchorSelect="#git-title" place="top" effect="solid">
            GitHub
          </ReactTooltip>
          <ReactTooltip anchorSelect="#mail-title" place="top" effect="solid">
            GMail
          </ReactTooltip>

          <div
            className="mx-auto  items-center py-10 mt-10 bg-gradient-to-b from-teal-500 rounded-full 
        w-80 h-80 "
          >
            <Image src={profile} height={300} width={300}></Image>
          </div>
        </section>
        <section>
          <div className="flex items-center flex-col text-center leading-7 text-gray-800 py-5">
            <h3 className="text-2xl font-semibold md:text-3xl  dark:text-gray-300">
              Services I Offer
            </h3>
            <p className=" md:text-lg md:max-w-3xl dark:text-gray-500">
              As a React front-end developer, I specialize in creating
              exceptional user interfaces and delivering seamless user
              experiences. With expertise in React JS and its ecosystem, I offer
              a range of services including custom web application development,
              single-page application (SPA) creation, responsive web design,
              code optimization, and component library development.
            </p>
          </div>
          <div className="flex max-md:flex-col gap-10 justify-center w-full px-6">
            <div className=" w-full md:w-[500px] text-center shadow-xl p-10 rounded-xl my-10  dark:bg-slate-100">
              <Image
                className="mx-auto drop-shadow-lg"
                src={developer}
                width={200}
                height={200}
              ></Image>
              <h3 className="text-base font-medium md:text-xl">
                Front-End Development
              </h3>
              <p className=" md:text-lg">
                specialize in creating interactive and responsive user
                interfaces using React js.
              </p>
            </div>
            <div className=" w-full md:w-[500px] text-center shadow-xl p-10 rounded-xl my-10  dark:bg-slate-100">
              <Image
                className="mx-auto "
                src={tools}
                width={200}
                height={200}
              ></Image>
              <div className="mb-10">
                <h3 className="text-base font-medium md:text-xl ">
                  Component Libraries and UI Frameworks
                </h3>
                <p className=" md:text-lg">
                  Creating elegent designs suited for your needs design theory.
                </p>
              </div>
            </div>
            <div className=" w-full md:w-[500px] text-center shadow-xl p-10 rounded-xl my-10  dark:bg-slate-100">
              <Image
                className="mx-auto "
                src={integration}
                width={200}
                height={200}
              ></Image>
              <div>
                <h3 className="text-base font-medium md:text-xl mt-9">
                  Migration and Integration
                </h3>
                <p className=" md:text-lg">
                  This involves analyzing the current architecture, identifying
                  integration points, and implementing seamless integration with
                  minimal disruption.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="flex items-center flex-col">
            <h3 className="text-3xl text-center py-5 font-semibold md:text-4xl  dark:text-gray-300">
              {" "}
              Portfolio
            </h3>
            <p className=" text-center leading-7 text-gray-800  md:text-lg  dark:text-gray-500 md:max-w-3xl">
              My portfolio showcases my skills and accomplishments as a React
              front-end developer. It highlights my expertise in creating
              engaging user interfaces, building custom web applications, and
              delivering seamless user experiences
            </p>
            <div className="flex max-md:flex-col items-center gap-10 py-10 shadow-xl p-10 rounded-xl overflow-hidden ">
              <div className="transform hover:scale-125 transition ease-in duration-500 ">
                <Image src={certificate} height={400} width={400} />
                <h3 className=" dark:text-gray-300 font-semibold text-center">
                  Certificate Generator
                </h3>
              </div>

              <div className="transform hover:scale-125 transition ease-in duration-500 ">
                <Image src={ecom} height={400} width={400} />
                <h3 className=" dark:text-gray-300 font-semibold text-center">
                  E-commerce App
                </h3>
              </div>
              <div className="transform hover:scale-125 transition ease-in duration-500 ">
                <Image src={netflix} height={400} width={400} />
                <h3 className="  dark:text-gray-300 font-semibold text-center">
                  Netflix clone
                </h3>
              </div>
              <div className="transform hover:scale-125 transition ease-in duration-500 ">
                <Image src={shobha} height={400} width={400} />
                <h3 className="  dark:text-gray-300 font-semibold text-center">
              ShobhaGold
                </h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
