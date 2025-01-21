import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import {
  initial,
  animate as whileInView,
  transition,
} from "../utils/animation";
import servicesData from "../assets/data/services";

const Services = ({ servicesRef }) => {
  return (
    <motion.section
      initial={initial}
      whileInView={whileInView}
      transition={transition}
      ref={servicesRef}
      id="services"
      className="sm:h-screen w-full  flex flex-col  flex-initial justify-center  gap-8 relative
      p-2 text-white font-medium   "
    >
      <h
        className=" font-extrabold text-white text-2xl tracking-wider w-fit self-start
        border-b-[3px] border-b-[#0094c6] p-2"
      >
        Services:
      </h>
      <div className="flex flex-wrap  p-4 gap-3">
        {servicesData.map((s) => (
          <ServiceCard data={s} />
        ))}
      </div>
    </motion.section>
  );
};

export default Services;
