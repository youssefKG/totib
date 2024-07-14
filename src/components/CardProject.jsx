import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import {
  transition,
  initial,
  animate as whileInView,
  viewPort,
} from "../utils/animation";

const CardProject = ({ info, handleOpenProjectDetail }) => {
  return (
    <motion.button
      initial={initial}
      whileInView={whileInView}
      transition={transition}
      onClick={handleOpenProjectDetail}
      viewport={viewPort}
      className="projectCard flex items-center flex-col  gap-2  relative 
      hover:scale-105 border  border-gray-800 cursor-pointer hover:opacity-100
      transitionClass bg-[#001242]/50 hover:bg-[#040f16]/80
       p-1 rounded-[4px]  max-w-sm self-start   opacity-70 hover:border-white"
    >
      <img className=" rounded-2xl " src={info.images[0]} alt="project img" />
      <div className=" flex  flex-col gap-4 flex-wrap">
        <div className="flex gap-2 items-center">
          <h className="text-gray-200 uppercase font-bold text-lg tracking-wide ">
            {info.title}
          </h>
          <FiArrowUpRight className="text-white font-bold w-5 h-5 upRightFlesh" />
        </div>
        <p className="text-gray-400 tracking-wide text-xs sm:text-sm line-clamp-3  ">
          {info.description}
        </p>
        <div className="self-start justify-self-start text-sm text-start text-white">
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
