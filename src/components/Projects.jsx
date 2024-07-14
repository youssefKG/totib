import CardProject from "./CardProject";
import { FaArrowRightLong } from "react-icons/fa6";
import projectsData from "../assets/data/projectsData";
const Projects = ({ projectsRef, handleOpenProjectDetail }) => {
  return (
    <section
      ref={projectsRef}
      id="projects"
      className="p-2 relative items-center flex flex-col gap-12"
    >
      <h
        className=" font-extrabold text-white text-2xl tracking-wider
        self-start border-b-[3px] border-b-[#0094c6] p-2"
      >
        Recent Projects :
      </h>

      <div className="flex lg:justify-start flex-grow-0 justify-center   items-center shrink flex-wrap  gap-4  mt-6">
        {projectsData.map((e, i) => (
          <CardProject
            info={e}
            key={e.id}
            handleOpenProjectDetail={() => handleOpenProjectDetail(e)}
          />
        ))}
      </div>
      <button
        className=" text-xl mt-4 font-bold text-gray-400
          hover:opacity-80 transition-opacity flex gap-2  items-center"
      >
        <h>View All Projects</h>
        <FaArrowRightLong />
      </button>
    </section>
  );
};

export default Projects;
