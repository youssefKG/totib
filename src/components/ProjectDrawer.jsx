import { Swiper, SwiperSlide } from "swiper/react";
import { LuChevronRightCircle } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { TiWorld } from "react-icons/ti";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/scrollbar";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const ProjectDrawer = ({ handleCloseProjectDetail, projectDetail }) => {
  return (
    <div
      style={{
        // opacity: projectDetail ? 1 : 0,
        transition: "all 800ms ",
        transform: `translateX(${projectDetail ? "0" : "130%"})`,
      }}
      className="sm:h-screen w-screen sm:bg-black/65 fixed z-40   flex  justify-end"
    >
      <div
        style={{
          opacity: projectDetail ? 1 : 0,
          transition: "all 2000ms ",
          transform: `translateX(${projectDetail ? "0" : "60%"})`,
        }}
        className="flex flex-col w-full  px-6 xl:w-1/3 lg:w-1/2 bg-[#001242]  overflow-y-scroll  text-white gap-10 h-screen justify-self-end self-end "
      >
        <div className="flex gap-3 flex-col py-4 sticky top-0 bg-[#001242] z-40">
          <div className="flex justify-between text-white items-center">
            <button className="" onClick={handleCloseProjectDetail}>
              <LuChevronRightCircle className="text-2xl text-white" />
            </button>
            <button
              className="font-semibold underline text-xl"
              onClick={handleCloseProjectDetail}
            >
              <p>Back To Projects</p>
            </button>
          </div>

          <div className="w-full h-[1px] bg-gray-600" />
        </div>

        <div className="flex flex-col relative gap-4 mb-8">
          <h1 className="font-bold text-xl">Real Chat App:</h1>
          <p className="text-gray-400 text-[14px]">projectDetail.title</p>
          <Swiper
            speed={1500}
            autoplay={{ delay: 2000 }}
            slidesPerView={1}
            loop={true}
            className="flex justify-center  items-center mt-6 w-full gap-6 p-4 "
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => swiper.slideNext}
            modules={{ Pagination, Autoplay, Navigation }}
          >
            {projectDetail?.images.map((img) => (
              <SwiperSlide className="flex items-center h-full">
                <img src={img} className="rounded-xl w-full " />
              </SwiperSlide>
            ))}
          </Swiper>

          <p className="text-gray-300 text-[15px]">
            {projectDetail?.description}
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex gap-2 flex-wrap">
              <h1 className="font-semibold">Technologies: </h1>
              {projectDetail?.tec.map((t) => (
                <p
                  className="p-1 px-3 text-gray-300  font-medium bg-[#005e7c]/70
              text-[15px] rounded-full"
                >
                  {t}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div
          className="flex gap-2 justify-between items-center sticky w-full
          bg-[#005e7c] border-white border bottom-8 "
        >
          <button
            className="flex flex-1 items-center justify-center hover:bg-[#005e7c] gap-2  p-2 px-4
              border-white  rounded-[4px] text-white transitionClass transition-colors
              font-bold hover:text-black"
          >
            <TiWorld className="w-5 h-5" />
            <p>Project live</p>
          </button>
          <div className="h-full w-[1px] bg-white" />
          <button
            className="flex gap-2 items-center text-center justify-center   p-2  px-4 flex-1
              rounded-[4px] text-white transitionClass transition-colors font-bold
              hover:bg-[#005e7c] hover:text-black"
          >
            <FaGithub className="w-5 h-5" />
            <p>Code</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDrawer;
