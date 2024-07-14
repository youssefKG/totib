import { FiArrowUpRight } from "react-icons/fi";
import {
  transition,
  initial,
  animate as whileInView,
  viewPort,
} from "../utils/animation";
import { FaShare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const CardProject = ({ info, handleOpenProjectDetail }) => {
  const navigate = useNavigate();

  return (
    <motion.button
      initial={initial}
      whileInView={whileInView}
      transition={transition}
      onClick={handleOpenProjectDetail}
      viewport={viewPort}
      className="projectCard flex items-center flex-col  gap-4  relative 
      hover:scale-105 border  border-gray-800 cursor-pointer hover:opacity-100
      transitionClass bg-[#001242]/50 hover:bg-[#040f16]/80
       p-6 rounded-[4px] sm:min-w-2xl sm:max-w-xs  w-full opacity-70 hover:border-white"
    >
      <img className=" rounded-lg " src={info.images[0]} alt="project img" />
      <div className=" flex  flex-col gap-4 flex-wrap">
        <div className="flex gap-2 items-center">
          <h className="text-gray-200 uppercase font-bold text-lg tracking-wide ">
            {info.title}
          </h>
          <FiArrowUpRight className="text-white font-bold w-5 h-5 upRightFlesh" />
        </div>
        <p className="text-gray-400 tracking-wide  text-[14px] line-clamp-3  ">
          {info.description}
        </p>
        <div className="self-start justify-self-start text-start text-white">
          <p>Demo:</p>
          <p className="px-4">
            <span>Email :</span> {info.demo.email}
          </p>
          <p className="px-4">
            <span>Password : </span>
            {info.demo.password}
          </p>
        </div>
      </div>
    </motion.button>
  );
};

export default CardProject;
