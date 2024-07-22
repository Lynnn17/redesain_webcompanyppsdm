import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Gedung from "../assets/gedung.png";
const Service = () => {
  return (
    <>
      <div className=" py-10 bg-gray">
        <p className="py-2 text-2xl xl:text-4xl font-bold text-white text-center">
          Layanan Umum
        </p>
        <div className="w-full xl:w-[90%] h-full mx-auto ">
          <Swiper
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 1,
                centeredSlides: false,
              },

              1280: {
                slidesPerView: 3,
                spaceBetween: 1,
                centeredSlides: false,
              },
            }}
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true }}
            slidesPerView={1}
            navigation={true}
            centeredSlides={true}
            className=" h-[28rem] mt-4"
          >
            <SwiperSlide>
              <div className="bg-gray rounded-lg w-[90%] xl:w-[80%] h-[36rem] mx-auto px-3">
                <img
                  className="rounded-[1.5rem] mx-auto h-[45%] w-[100%]"
                  src={Gedung}
                />
                <div className="bg-white -mt-4 h-[10rem] rounded-b-[1.5rem]">
                  <p className="pt-4 text-base font-extrabold text-center pb-2 pt-6">
                    PELATIHAN
                  </p>
                  <p className="text-sm text-center  px-2">
                    PPSDM MIGAS berpengalaman dalam menyelenggarakan Pelatihan
                    berbasis kompentensi untuk sub sektor Migas, Meliputi bidang
                    hulu, hilir dan penunjang.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-gray rounded-lg w-[90%] xl:w-[80%] h-[36rem] mx-auto px-3">
                <img
                  className="rounded-[1.5rem] mx-auto h-[45%] w-[100%]"
                  src={Gedung}
                />
                <div className="bg-white -mt-4 h-[10rem] rounded-b-[1.5rem]">
                  <p className="pt-4 text-base font-extrabold text-center pb-2 pt-6">
                    SERTIFIKASI
                  </p>
                  <p className="text-sm text-center px-2">
                    Berdiri sejak tahun 1996 sebagai satu-satunya LSP Sub Sektor
                    Migas yang terakreditasi ISO 17024 oleh Komite Akreditasi
                    Nasional KAN dan mempunyai 36 ruang lingkup SKKNI.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-gray rounded-lg w-[90%] xl:w-[80%] h-[36rem] mx-auto px-3">
                <img
                  className="rounded-[1.5rem] mx-auto h-[45%] w-[100%]"
                  src={Gedung}
                />
                <div className="bg-white -mt-4 h-[10rem] rounded-b-[1.5rem]">
                  <p className="pt-4 text-base font-extrabold text-center pb-2 pt-6">
                    PRAKTIK KERJA LAPANGAN
                  </p>
                  <p className="text-sm text-center px-2">
                    PPSDM MIGAS mempersilahkan para civitas academika untuk
                    memanfaatkan fasilitasnya untuk kemajuan pendidikan di
                    Indonesia.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-gray rounded-lg w-[90%] xl:w-[80%] h-[36rem] mx-auto px-3">
                <img
                  className="rounded-[1.5rem] mx-auto h-[45%] w-[100%]"
                  src={Gedung}
                />
                <div className="bg-white -mt-4 h-[10rem] rounded-b-[1.5rem]">
                  <p className="pt-4 text-base font-extrabold text-center pb-2 pt-6">
                    LABORATORIUM PENGUJIAN
                  </p>
                  <p className="text-sm text-center px-2">
                    Laboratorium Pengujian Migas (LPM) telah terakreditasi oleh
                    KAN dan melayani uji laboratorium lingkungan, kimia,produk
                    minyak bumi, sipil dan eksplorasi geologi
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-gray rounded-lg w-[90%] xl:w-[80%] h-[36rem] mx-auto px-3">
                <img
                  className="rounded-[1.5rem] mx-auto h-[45%] w-[100%]"
                  src={Gedung}
                />
                <div className="bg-white -mt-4 h-[10rem] rounded-b-[1.5rem]">
                  <p className="pt-4 text-base font-extrabold text-center pb-2 pt-6">
                    WISAMA & GEDUNG
                  </p>
                  <p className="text-sm text-center px-2">
                    PPSDM MIGAS mengelola beberapa Wisma yang digunakan untuk
                    akomodasi peserta diklat dan sertifikasi serta melayani
                    kebutuhan masyarakat umum.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Service;
