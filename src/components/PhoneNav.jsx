import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navItems = ["About", "Technologie", "Journey", "Projects", "Services"];
export default function PhoneNav() {
  const [isNavShown, setIsNavShown] = useState(true);
  const [previewScrollValue, setPreviewScrollValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollValue = window.scrollY;

      if (currentScrollValue < previewScrollValue) setIsNavShown(true);
      else setIsNavShown(false);

      setPreviewScrollValue(currentScrollValue);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [previewScrollValue]);

  return (
    <motion.div
      initial={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      animate={{ y: isNavShown ? 0 : -100 }}
      className="flex flex-wrap gap-2 mx-px rounded-xl sm:hidden fixed top-6  justify-center
      justify-self-center z-30 self-center bg-[#0094c6]/90 text-white py-3 px-2"
    >
      <div className="flex items-center  gap-2">
        <a className="text-xs font-semibold cursor-pointer" href="#about">
          About
        </a>
        <Divider />
      </div>
      <div className="flex items-center  gap-2">
        <a
          className="text-xs font-semibold cursor-pointer"
          href="#technologies"
        >
          Technologies
        </a>
        <Divider />
      </div>
      <div className="flex items-center  gap-2">
        <a className="text-xs font-semibold cursor-pointer" href="#journey">
          Journey
        </a>
        <Divider />
      </div>
      <div className="flex items-center  gap-2">
        <a className="text-xs font-semibold cursor-pointer" href="#projects">
          Projects
        </a>
        <Divider />
      </div>
      <div className="flex items-center  gap-2">
        <a className="text-xs font-semibold cursor-pointer" href="#services">
          Services
        </a>
      </div>
    </motion.div>
  );
}

const Divider = () => {
  return <div className="h-4 w-px bg-gray-300 rounded-full"></div>;
};
