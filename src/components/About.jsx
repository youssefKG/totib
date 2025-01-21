import { motion } from "framer-motion";
import {
  initial,
  animate as whileInView,
  transition,
} from "../utils/animation";
import CV from "../assets/data/CV.pdf";

export default function About({ aboutRef }) {
  return (
    <motion.section
      initial={initial}
      whileInView={whileInView}
      transition={transition}
      ref={aboutRef}
      id="about"
      className="flex flex-col justify-center items-center gap-8 relative
      p-2 mt-24 text-white font-medium   "
    >
      <h
        className=" font-extrabold text-white text-2xl tracking-wider w-fit self-start
        border-b-[3px] border-b-[#0094c6] p-2"
      >
        About Me:
      </h>
      <div
        className="flex items-center border-dashed border-gray-700 border-y gap-27 p-4
        text-white justify-center"
      >
        <div className="gap-6 flex flex-col">
          <div>
            <h
              className="text-[#0094c6] border-dotted  border-gray-600 border sm:p-4 p-2 tracking-wider
              uppercase font-bold text-2xl flex flex-col mb-8"
            >
              Hi I'm Youssef Taoussi
            </h>
            <p className="max-w-xl border-dotted  border-gray-600 text-xs sm:text-base border-x p-2 sm:p-8 tracking-wider text-gray-200">
              Hi There, I'm{" "}
              <span className="font-semibold text-[#0094c6]">
                Youssef Taoussi{" "}
              </span>
              I'm a self-motivated and detail-oriented{" "}
              <span className="font-semibold text-[#0094c6]">
                A full stack developer{" "}
              </span>
              skilled in JavaScript and TypeScript, with experience in using
              frameworks and libraries like React for frontend development and
              Express for backend development, is well-versed in creating
              dynamic and responsive web applications. This developer can work
              with both SQL databases like MySQL and NoSQL databases like
              MongoDB, enabling them to build comprehensive and scalable
              solutions. Their expertise also extends to using tools and
              technologies such as Git for version control, Tailwind CSS for
              styling, and various other modern web development tools, allowing
              them to manage both client-side and server-side development
              efficiently.{" "}
            </p>
          </div>
          <a
            className="p-2 tracking-wider rounded border border-white
            cursor-pointer hover:bg-[#005e7c] hover:text-black transitionClass text-white px-6
            hover:opacity-80 text-center"
            href={CV}
            target="_blank"
          >
            <p className="font-bold tracking-wider">Check My Resume</p>
          </a>
        </div>
      </div>
    </motion.section>
  );
}
