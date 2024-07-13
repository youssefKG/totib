import { useRef, useState, useEffect } from "react";
import About from "../components/About";
import Projects from "../components/Projects";
import Journey from "../components/Experiences";
import Navbar from "../components/Navabar";
import Contact from "../components/Contact";
import Technologies from "../components/technologies.jsx";
import useVisibleSection from "../hooks/useHeighlightContent.jsx";
import ProjectDrawer from "../components/ProjectDrawer.jsx";
import ParticlesContainer from "../components/Particles.jsx";
import Services from "../components/Service.jsx";

const Home = () => {
  const aboutRef = useRef(null);
  const technologiesRef = useRef(null);
  const journeyRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const servicesRef = useRef(null);
  const [activeList, setActiveList] = useVisibleSection([
    { ref: aboutRef, refName: "about" },
    { ref: technologiesRef, refName: "technologies" },
    { ref: journeyRef, refName: "journey" },
    { ref: projectsRef, refName: "projects" },
    { ref: contactRef, refName: "contact" },
    { ref: servicesRef, refName: "services" },
  ]);
  const [projectDetail, setProjectDetail] = useState(null);

  const handleVisibleSection = (sectionName) => setActiveList(sectionName);

  return (
    <div className="homeContainer  z-10 overflow-x-hidden font-mono">
      <ProjectDrawer
        projectDetail={projectDetail}
        handleCloseProjectDetail={() => setProjectDetail(null)}
      />
      <Navbar activeList={activeList} setActiveList={setActiveList} />
      <div className="flex flex-col gap-10">
        <About
          visibleSection={activeList}
          handleVisibleSection={handleVisibleSection}
          aboutRef={aboutRef}
        />
        <Technologies
          handleVisibleSection={handleVisibleSection}
          visibleSection={activeList}
          technologiesRef={technologiesRef}
        />
        <Journey
          visibleSection={activeList}
          handleVisibleSection={handleVisibleSection}
          journeyRef={journeyRef}
        />
        <Projects
          handleOpenProjectDetail={(data) => setProjectDetail(data)}
          projectsRef={projectsRef}
          visibleSection={activeList}
          handleVisibleSection={handleVisibleSection}
        />
        <Services servicesRef={servicesRef} />
        <Contact
          contactRef={contactRef}
          visibleSection={activeList}
          handleVisibleSection={handleVisibleSection}
        />
      </div>
    </div>
  );
};

export default Home;
