import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Kilang from "../assets/kilang.png";
const About = () => {
  return (
    <>
      <div className="bg-white relative h-full w-full md:mt-[46%]">
        <h1 className="py-12 text-2xl md:text-4xl md:px-32 px-10 text-center  text-white font-semibold bg-gray relative h-[270px] ">
          Yuk, kita kepoin PPSDM MIGAS dan Sarananya
        </h1>

        {/* Card */}
        <section class="relative">
          <div class="bg-white w-full h-[82px] z-20 absolute -mt-20 top-0 flex items-end rounded-t-[50px]"></div>
        </section>

        {/* content */}
        <div className="-mt-32 w-full   ">
          <Swiper
            spaceBetween={30}
            slidesPerView={"auto"}
            centeredSlides={true}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation, Pagination]}
            className="z-30 h-[350px] w-full"
          >
            <SwiperSlide>
              <div class="flex flex-col items-center px-5 md:px-0 text-center ">
                <div class="w-[60%] md:w-[35%]">
                  <img className="" src={Kilang} alt="kilang" />
                </div>
                <div className="">
                  <h3 class="mt-6 text-xl font-bold ">Kilang Dan Utilitas</h3>
                  <p class="">
                    Kilang PPSDM Migas (Kilang Cepu) merupakan kilang tertua di
                    Indonesia, dan selama lebih dari satu abad telah ikut
                    mewarnai perkembangan sejarah perminyakan dan gas bumi di
                    Indonesia.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[100%] h-[100%] flex justify-center items-center">
                Hooh
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* endcontent */}

        {/* End Card */}
      </div>
    </>
  );
};

export default About;
