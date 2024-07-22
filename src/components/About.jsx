import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Kilang from "../assets/kilang.png";
import Laboratorium from "../assets/laboratorium.png";
import Workshop from "../assets/workshop.png";
import Perkantoran from "../assets/perkantoran.png";

import Pengertian from "./Pengertian";
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
        <div className="-mt-32 w-full    ">
          <Swiper
            spaceBetween={30}
            slidesPerView={"auto"}
            centeredSlides={true}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation, Pagination]}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 1,
                centeredSlides: false,
              },

              1280: {
                slidesPerView: 4,
                spaceBetween: 1,
                centeredSlides: false,
              },
            }}
            className="z-30 h-[350px] w-full"
          >
            <SwiperSlide>
              <div class="flex flex-col items-center px-5 text-center md:px-12 ">
                <div class="w-[60%]  ">
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
              <div class="flex flex-col items-center px-5 md:px-16 xl:px-12 text-center ">
                <div class="w-[47%] ">
                  <img className="" src={Laboratorium} alt="Laboratorium" />
                </div>
                <div className="">
                  <h3 class="mt-3 md:mt-4 text-xl font-bold ">Laboratorium</h3>
                  <p class="">
                    Laboratorium PPSDM MIGAS didedikasikan untuk memenuhi
                    kebutuhan industri Migas yaitu laboratorium geologi dan
                    eksplorasi, pemboran, produksi, proses dan pengolahan,
                    pengujian, listrik, mekanik dan instrumentasi.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="flex flex-col items-center px-5 md:px-16 text-center xl:px-12 ">
                <div class="w-[43%] md:w-[44%]  xl:w-[45%] ">
                  <img className="" src={Workshop} alt="Workshop" />
                </div>
                <div className="">
                  <h3 class="mt-6 md:mt-4 xl:mt-3 text-xl font-bold ">
                    Workshop
                  </h3>
                  <p class="">
                    PPSDM MIGAS mempunyai tugas utama menyelenggaraan pelatihan
                    berbasis kompentensi, meliputi bidang hulu, hilir dan
                    penunjang migas.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="flex flex-col items-center px-5 md:px-16 text-center xl:px-10 ">
                <div class="w-[43%] md:w-[43%] xl:w-[45%] ">
                  <img className="" src={Perkantoran} alt="Perkantoran" />
                </div>
                <div className="">
                  <h3 class="mt-3 text-xl font-bold xl:mt-1 ">Perkantoran</h3>
                  <p class="">
                    PPPSDM MIGAS sebagai satuan kerja di bawah kementerian ESDM
                    mejalankan manajemen perkantoran dengan personil yang
                    profesional di bidang Pengembangan Sumber Daya Manusia
                    bidang Minyak dan Gas Bumi.
                  </p>
                </div>
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
