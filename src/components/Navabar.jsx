const Navbar = ({ setActiveList, activeList }) => {
  return (
    <header>
      <nav
        className=" z-50  w-full top-0 border-gray-700 h-screen justify-center fixed
        p-6 flex-col  flex  "
      >
        <ul className="text-gray-500 flex flex-col gap-4 font-semibold text-[20px]">
          <li
            className={`${activeList === "about" && "active text-white transitionClass transition-colors scale-105"}  w-fit relative cursor-pointer`}
          >
            <a onClick={() => setActiveList("about")} href="#">
              About
            </a>
          </li>
          <li
            className={`${activeList === "journey" && "active text-white transitionClass scale-105"} w-fit relative`}
          >
            <a onClick={() => setActiveList("journey")} href="#journey">
              Journey
            </a>
          </li>
          <li
            className={`${activeList === "projects" && "active text-white transitionClass transition-colors scale-105"} relative w-fit`}
          >
            <a onClick={() => setActiveList("projects")} href="#projects">
              Projects
            </a>
          </li>
          <li
            className={`${activeList === "contact" && "active text-white transitionClass transition-colors scale-105"} relative w-fit`}
          >
            <a onClick={() => setActiveList("contact")} href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
