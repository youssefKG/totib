import { motion } from "framer-motion";
import skillsImageUrls from "../assets/data/skills";
import {
  initial,
  animate as whileInView,
  transition,
  viewPort,
} from "../utils/animation";

const Technologies = ({ technologiesRef }) => {
  return (
    <motion.section
      initial={initial}
      whileInView={whileInView}
      transition={transition}
      viewport={viewPort}
      id="technologies"
      className="flex sm:h-screen justify-center items-center flex-col  gap-12 p-4 m-6 sm:p-0"
      ref={technologiesRef}
    >
      <h
        className=" font-extrabold self-start text-2xl text-start justify-self-start
         text-white border-b-[3px] border-b-[#0094c6]"
      >
        Technologies :
      </h>
      <div className="flex flex-wrap justify-center max-w-3xl gap-3 items-center rounded-full">
        {skillsImageUrls.map((url) => (
          <img
            src={url}
            className=" border-b bg-white rounded-full object-contain hover:scale-105
            transition-all cursor-pointer border-r  w-26 h-26 border-[#0094c6]
            p-2"
            alt="skills"
          />
        ))}
      </div>
    </motion.section>
  );
};

export default Technologies;
