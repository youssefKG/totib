import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import projectsData from "../assets/data/projectsData";
import { VscLiveShare } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/scrollbar";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
const Project = () => {
  const { projectId } = useParams();
  const [projectInfo, setProjectInfo] = useState(null);
  useEffect(() => {
    for (let i = 0; i < projectsData.length; i++) {
      if (projectsData[i].id === +projectId) {
        console.log(projectsData[i]);
        setProjectInfo(projectsData[i]);
        break;
      }
    }
    setInterval(() => {}, 2000);
  }, [projectId]);
  return (
    projectInfo && (
      <div className="flex p-2 flex-col relative  ">
        <h className="text-white font-extrabold text-3xl  z-20 top-4 fixed underline tracking-wider transform translate-x-1/2  right-[50%] uppercase text-center ">
          {projectInfo.title}
        </h>
        <Swiper
          speed={1500}
          autoplay={{ delay: 2000 }}
          className="mt-12 flex justify-center  items-center w-full "
          slidesPerView={1}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay, Navigation]}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => swiper.slideNext}
          onSlideChange={() => console.log("slide change")}
        >
          {projectInfo.images.map((e, i) => {
            console.log(e);
            return (
              <SwiperSlide className=" self-center w-full flex justify-center">
                <img
                  src={e}
                  key={i}
                  className="rounded-2xl p-2 h-[56vh] - object-contain w-full  self-center"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="flex flex-col p-4">
          <h className="text-gray-200 font-extrabold text-3xl tracking-wider uppercase  mb-4">
            Description :
          </h>
          <p className="text-gray-400 font-medium tracking-wider max-w-[58vw]  self-center leading-7 px-12">
            {projectInfo.description}
          </p>
          <div className="flex gap-2 justify-center">
            <button
              className="flex items-center hover:bg-[#005e7c] gap-2 mt-4 p-2 px-4
              border-white border rounded-[4px] text-white transitionClass transition-colors
              font-bold hover:text-black"
            >
              <VscLiveShare className="w-5 h-5" />
              <p>Project live</p>
            </button>
            <button
              className="flex gap-2 items-center  mt-4 p-2  px-4 border-white border
              rounded-[4px] text-white transitionClass transition-colors font-bold
              hover:bg-[#005e7c] hover:text-black"
            >
              <FaGithub className="w-5 h-5" />
              <p>Code</p>
            </button>
          </div>
        </div>
      </div>
    )
  );
};
export default Project;
