import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import Gedung from "../assets/gedung.png";

const Berita = () => {
  return (
    <>
      <div className="w-full h-full py-5">
        <p className="text-2xl md:text-3xl font-bold text-center pb-3">
          Berita
        </p>
        <div className="w-full h-full px-4 grid md:grid-cols-3 gap-2 md:mt-7 xl:px-28">
          <img
            className="md:col-span-2 w-[97%]  mx-auto h-[15rem] md:h-[80%] xl:h-[25rem] rounded-[1.5rem]"
            src={Gedung}
          />
          <div>
            <p className="text-lg md:text-2xl font-bold text-start px-3 mt-1 ">
              PPSDM MIGAS DAN TRISAKTI PERERAT KERJA SAMA TENTANG OPERASI
              LAPANGAN MIGAS
            </p>
            <p className="text-sm md:text-lg text-start px-3 py-2 font-mono ">
              16-07-2024
            </p>
            <p className="text-sm md:text-lg text-start px-3">
              Pada tanggal 15 Juli 2024 Pusat Pengembangan Sumber Daya Manusia
              Minyak dan Gas Bumi PPSDM Migas bekerja sama dengan Universitas
              Trisakti menyelenggarakan Pelatihan Pengantar Operasi Lapangan
              Migas . . . . . . . . . . .
            </p>
          </div>
          {/* <button className="ml-2 mt-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-3 rounded-full">
            Lihat Selengkapnya
          </button> */}
        </div>

        <Swiper
          slidesPerView={"auto"}
          spaceBetween={20}
          breakpoints={{
            1020: {
              spaceBetween: 10,
              slidesPerView: 3,
            },
          }}
          className="pl-7 mt-4 xl:mt-10 xl:px-28"
        >
          <SwiperSlide className="w-[75%]">
            <div>
              <img
                className=" w-[94%] h-[10rem] md:w-[90%] md:h-[17rem] xl:w-[95%] xl:h-[15rem]  rounded-[1.5rem] object-cover"
                src={Gedung}
              />
              <p className="text-lg md:text-2xl font-bold text-start mt-1 ">
                PPSDM MIGAS DAN TRISAKTI PERERAT KERJA SAMA TENTANG OPERASI
                LAPANGAN MIGAS
              </p>
              <p className="text-sm md:text-lg text-start px-1  py-2 font-mono ">
                16-07-2024
              </p>
              <p className="text-sm md:text-lg text-start px-1 pr-4 line-clamp-4">
                Pada tanggal 15 Juli 2024 Pusat Pengembangan Sumber Daya Manusia
                Minyak dan Gas Bumi PPSDM Migas bekerja sama dengan Universitas
                Trisakti menyelenggarakan Pelatihan Pengantar Operasi Lapangan
                Migas . . . . . . . . . . .
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-[75%]">
            <div>
              <img
                className=" w-[94%] h-[10rem] md:w-[90%] md:h-[17rem] xl:h-[15rem] xl:w-[95%] rounded-[1.5rem] object-cover"
                src={Gedung}
              />
              <p className="text-lg md:text-2xl font-bold text-start mt-1 ">
                PPSDM MIGAS DAN TRISAKTI PERERAT KERJA SAMA TENTANG OPERASI
                LAPANGAN MIGAS
              </p>
              <p className="text-sm md:text-lg text-start px-1  py-2 font-mono ">
                16-07-2024
              </p>
              <p className="text-sm md:text-lg text-start px-1 pr-4 line-clamp-4">
                Pada tanggal 15 Juli 2024 Pusat Pengembangan Sumber Daya Manusia
                Minyak dan Gas Bumi PPSDM Migas bekerja sama dengan Universitas
                Trisakti menyelenggarakan Pelatihan Pengantar Operasi Lapangan
                Migas . . . . . . . . . . .
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-[75%] pr-2 xl:pr-0">
            <div>
              <img
                className="w-[94%] h-[10rem] md:w-[90%] md:h-[17rem] xl:h-[15rem]  rounded-[1.5rem]  xl:w-[95%] object-cover"
                src={Gedung}
              />
              <p className="text-lg md:text-2xl font-bold text-start mt-1 ">
                PPSDM MIGAS DAN TRISAKTI PERERAT KERJA SAMA TENTANG OPERASI
                LAPANGAN MIGAS
              </p>
              <p className="text-sm md:text-lg text-start px-1  py-2 font-mono ">
                16-07-2024
              </p>
              <p className="text-sm md:text-lg text-start px-1 pr-4 line-clamp-4">
                Pada tanggal 15 Juli 2024 Pusat Pengembangan Sumber Daya Manusia
                Minyak dan Gas Bumi PPSDM Migas bekerja sama dengan Universitas
                Trisakti menyelenggarakan Pelatihan Pengantar Operasi Lapangan
                Migas . . . . . . . . . . .
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Berita;
