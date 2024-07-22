import { useState } from "react";

import Ppsdm from "../assets/ppsdm.png";

const Pengertian = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-10 2xl:px-20 ">
      <p className="text-2xl md:text-3xl font-bold text-center">
        Apa Sih PPSDM MIGAS ITU?
      </p>
      <div className="px-7 mx-auto mt-10">
        <img className="w-[35%] md:w-[25%] xl:w-[10%]" src={Ppsdm} alt="" />
        <p className="py-2 font-extrabold text-xl ">#BridgingYourSuccess</p>
        <p className="md:text-lg xl:pr-5">
          Pusat Pengembangan Sumber Daya Manusia Minyak dan Gas Bumi (PPSDM
          MIGAS) adalah Instansi Pemerintah Pusat di bawah Badan Pengembangan
          Sumber Daya Manusia Energi dan Sumber Daya Mineral, Kementerian Energi
          dan Sumber Daya Mineral Dalam melaksanakan tugas, PPSDM MIGAS Cepu
          bertanggung jawab langsung kepada Kepala Badan Diklat Energi dan
          Sumber Daya Mineral (Surat Keputusan No.150 tahun 2001 tanggal 2 Maret
          2001) yang telah diperbaharui dengan peraturan Menteri ESDM no. 13
          tahun 2016 tanggal 20 Juli 2016, dimana PPSDM MIGAS mempunyai tugas
          pengembangan sumber daya manusia di bidang minyak dan gas bumi.
        </p>
      </div>
      <div className="xl:grid xl:grid-cols-2  xl:justify-center ">
        <div>
          {/* VIsi Misi */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-[90%] flex flex-row justify-between items-center mx-auto h-10 bg-gray rounded-lg px-2 mt-2"
          >
            <p className="text-center text-white  font-bold">Visi Dan Misi</p>
            <div>
              <svg
                fill="#ffff"
                height="20px"
                width="20px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 330 330"
                xml:space="preserve"
              >
                <path
                  id="XMLID_225_"
                  d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                />
              </svg>
            </div>
          </button>

          {isOpen && (
            <div className="w-[90%] border-t-4 border-neutral-400   mx-auto h-full bg-gray -mt-1 rounded-b-lg px-2">
              <p className="text-start pt-2 text-white  font-base">Visi:</p>
              <p className="text-start py-2 text-white  font-base">
                Menjadi pusat pengembangan sumber daya manusia di subsektor
                minyak dan gas bumi yang unggul, berkarakter, dan diakui
                internasional
              </p>
              <p className="text-start pt-2 text-white  font-base">Misi:</p>
              <ol className="ml-5 list-decimal  text-white  font-base pb-4">
                <li>
                  Menyiapkan sumber daya manusia di subsektor minyak dan gas
                  bumi yang terampil, ahli, profesional, bermartabat tinggi,
                  berkarakter dan mampu bersaing di pasar global di subsektor
                  minyak dan gas bumi.
                </li>
                <li>
                  Menyelenggarakan dan mengembangkan program pelatihan dengan
                  metode pembelajaran serta sarana dan prasarana yang
                  berkualitas.
                </li>
                <li>
                  Menyelenggarakan pelayanan dan mengembangkan uji sertifikasi
                  kompetensi.
                </li>
                <li>
                  Mengembangkan jejaring untuk dapat bersinergi dengan lembaga
                  pendidikan, industri, masyarakat, dan pemerintah dalam
                  menyelenggarakan pendidikan dan pelatihan.
                </li>
              </ol>
            </div>
          )}
        </div>
        <div>
          {/* Tugas Pokok */}
          <button
            onClick={() => setOpen(!open)}
            className="w-[90%] flex flex-row justify-between items-center mx-auto h-10 bg-gray rounded-lg px-2 mt-1 xl:mt-0"
          >
            <p className="text-center text-white  font-bold">
              Tugas Pokok Dan Fungsi
            </p>
            <div>
              <svg
                fill="#ffff"
                height="20px"
                width="20px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 330 330"
                xml:space="preserve"
              >
                <path
                  id="XMLID_225_"
                  d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                />
              </svg>
            </div>
          </button>

          {open && (
            <div className="w-[90%] border-t-4 border-neutral-400 mx-auto h-full bg-gray -mt-1 rounded-b-lg px-2">
              <p className="text-start pt-2 text-white  font-base">
                Berdasarkan Peraturan Menteri ESDM Nomor 13 Tahun 2016 memiliki
                Tugas dan Fungsi sebagai berikut :
              </p>
              <p className="text-start pt-2 text-white  font-base">
                Tugas Pokok:
              </p>
              <p className="text-start py-2 text-white  font-base">
                Melaksanakan pengembangan sumber daya manusia di bidang minyak
                dan gas bumi
              </p>
              <p className="text-start pt-2 text-white  font-base">Fungsi:</p>
              <ol className="ml-5 list-decimal  text-white  font-base pb-4">
                <li>
                  Penyiapan penyusunan kebijakan teknis pengembangan sumber daya
                  manusia di bidang minyak dan gas bumi.
                </li>
                <li>
                  Penyusunan program, akuntabilitas kinerja dan evaluasi serta
                  pengelolaan informasi pengembangan sumber daya manusia di
                  bidang minyak dan gas bumi.
                </li>
                <li>
                  Penyusunan perencanaan dan standarisasi pengembangan sumber
                  daya manusia di bidang minyak dan gas bumi.
                </li>
                <li>
                  Pelaksanaan pengelolaan sarana prasarana dan informasi
                  pengembangan sumber daya manusia di bidang minyak dan gas
                  bumi.
                </li>
                <li>
                  Pemantauan, evaluasi dan pelaporan pelaksanaan tugas di bidang
                  pengembangan sumber daya manusia Minyak dan Gas Bumi.
                </li>
                <li>
                  Pelaksanaan administrasi Pusat Pengembangan Sumber Daya
                  Manusia Minyak dan Gas Bumi.
                </li>
              </ol>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pengertian;
