import Image from "next/image";
import { BsFillMoonStarsFill, BsGithub, BsLinkedin, } from "react-icons/bs";
import{GrMail} from 'react-icons/gr'
import  profile from '../public/img8.jpeg'
const Home = () => {
  return (
    <div className=" bg-white px-10">
      <section className="w-full min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-semibold font-burtons">My Portfolio</h1>
          <ul className="flex items-center gap-5 ">
            <li>
              <BsFillMoonStarsFill className="text-2xl cursor-pointer" />
            </li>
            <li>
              <a
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md font-burtons"
                href="#"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-center p-10 ">
          <h2 className="text-5xl py-2 text-teal-600 font-medium">Shahma Yousuf</h2>
          <h3 className="text-2xl py-2" >React Front-End Developer</h3>
          <p className="text-base leading-7 text-gray-800">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi atque nisi doloribus adipisci,<br></br>
             dicta ad totam voluptatum blanditiis cupiditate expedita sed tenetur magnam fuga eligendi praesentium iure. Nihil, quos odit?</p>
        </div>
        <div className="text-3xl flex gap-14 justify-center py-3 text-gray-700">
            <GrMail/>
           <BsLinkedin/>
           <BsGithub/>
        </div>
        <div className="flex justify-center items-center py-10 ">
        <Image 
        src={profile}
        height={300}
        width={300}></Image>
        </div>
      </section>
    </div>
  );
};

export default Home;
